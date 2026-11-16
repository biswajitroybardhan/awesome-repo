/* Khai Tracker — offline-first, localStorage, Phase-0 pilot tool */
(function () {
  "use strict";

  var LS_KEY = "khai_tracker_v1";
  var MEALS = ["breakfast", "lunch", "dinner", "snacks"];

  var state = load() || emptyState();
  var currentView = null;
  var dayDetailDate = null;

  function emptyState() {
    return { profile: null, logs: {} };
  }

  function load() {
    try { return JSON.parse(localStorage.getItem(LS_KEY)) || null; }
    catch (e) { return null; }
  }

  function persist() {
    dirty = true;
    localStorage.setItem(LS_KEY, JSON.stringify(state));
    scheduleAuto();
  }

  /* ---------- Sync (multi-participant) ---------- */

  var dirty = false;
  var syncTimer = null;
  var deferredInstall = null;
  var SERVER_KEY = "khai_server_url";
  var DEVICE_KEY = "khai_device_id";

  function getServerUrl() {
    var u = (localStorage.getItem(SERVER_KEY) || "").trim();
    return u || location.origin;
  }

  function getDeviceId() {
    var id = localStorage.getItem(DEVICE_KEY);
    if (!id) {
      id = (crypto.randomUUID && crypto.randomUUID()) ||
        "dev-" + Math.random().toString(36).slice(2) + Date.now().toString(36);
      localStorage.setItem(DEVICE_KEY, id);
    }
    return id;
  }

  function syncPayload() {
    var p = state.profile;
    if (!p) return null;
    return { code: p.code, device_id: getDeviceId(), days: state.logs || {} };
  }

  function showSync(msg) {
    var m = el("sync-status");
    if (m) m.textContent = msg;
  }

  function doSync(manual) {
    if (currentView != null && location.protocol.indexOf("http") !== 0) {
      showSync(t("set.sync.noencrypt"));
      return;
    }
    var payload = syncPayload();
    if (!payload) return;
    var server = getServerUrl();
    fetch(server + "/api/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
      .then(function (r) { return r.json().catch(function () { throw new Error(t("sync.badresp")); }); })
      .then(function (res) {
        if (res.ok) {
          dirty = false;
          showSync(t("set.sync.synced") + " " + res.stored + " · " +
            new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }));
        } else {
          showSync(t("sync.servererr") + " " + (res.error || "unknown"));
        }
      })
      .catch(function () {
        showSync(manual
          ? t("sync.offline.manual")
          : t("sync.offline.auto"));
      });
  }

  function scheduleAuto() {
    if (syncTimer) clearTimeout(syncTimer);
    syncTimer = setTimeout(function () { if (dirty) doSync(false); }, 8000);
  }

  function wireSyncSettings() {
    el("sync-url").value = localStorage.getItem(SERVER_KEY) || "";
    if (location.protocol.indexOf("http") !== 0) {
      el("sync-hint").textContent = t("set.sync.needsserver");
    }
    on("btn-save-sync", "click", function () {
      var v = el("sync-url").value.trim();
      if (v) localStorage.setItem(SERVER_KEY, v); else localStorage.removeItem(SERVER_KEY);
      showSync(t("set.sync.saved") + " " + (v || t("set.sync.this")));
    });
    on("btn-sync-now", "click", function () { doSync(true); });
  }

  /* ---------- PWA install ---------- */

  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    deferredInstall = e;
    el("install-banner").classList.remove("hidden");
  });

  on("btn-install", "click", function () {
    if (!deferredInstall) return;
    deferredInstall.prompt();
    deferredInstall.userChoice.then(function () {
      deferredInstall = null;
      el("install-banner").classList.add("hidden");
    });
  });

  window.addEventListener("appinstalled", function () {
    el("install-banner").classList.add("hidden");
  });

  window.addEventListener("online", function () { if (dirty) doSync(false); });

  /* ---------- Boot ---------- */

  if ("serviceWorker" in navigator && location.protocol.indexOf("http") === 0) {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  }

  applyI18n();
  var langSel = el("lang-select");
  var langCur = localStorage.getItem("khai_lang") || "en";
  if (langSel) langSel.value = langCur;
  if (langSel) langSel.addEventListener("change", function () { setLang(langSel.value); });

  window._khai_on_lang = function () {
    if (state && state.profile) { renderMain(); renderHistory(); renderProgress(); }
  };

  wireSyncSettings();
  if (state.profile) showView("main"); else showView("onboard");

  function el(id) { return document.getElementById(id); }
  function on(id, ev, fn) { el(id).addEventListener(ev, fn); }

  function todayISO() {
    var d = new Date();
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  }

  function pad(n) { return n < 10 ? "0" + n : "" + n; }

  function dateKey(offset) {
    var d = new Date();
    d.setDate(d.getDate() + offset);
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  }

  function prettyDate(iso) {
    var p = iso.split("-");
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    return d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" });
  }

  function getDay(iso) {
    if (!state.logs[iso]) state.logs[iso] = emptyDay();
    return state.logs[iso];
  }

  function emptyDay() {
    return {
      meals: { breakfast: [], lunch: [], dinner: [], snacks: [] },
      supplements: [],
      readings: { fasting: null, energy: null, mood: null, sleep: null, note: "" }
    };
  }

  /* ---------- Router ---------- */

  function showView(name) {
    currentView = name;
    ["onboard", "main", "settings"].forEach(function (v) {
      el("view-" + v).classList.toggle("hidden", v !== name);
    });
    if (name === "main") renderMain();
    if (name === "settings") renderSettings();
  }

  function showTab(t) {
    ["today", "history", "progress"].forEach(function (x) {
      el("tab-" + x).classList.toggle("hidden", x !== t);
    });
    document.querySelectorAll(".tab").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-tab") === t);
    });
    if (t === "history") renderHistory();
    if (t === "progress") renderProgress();
  }

  /* ---------- Onboarding ---------- */

  function collectMeds() {
    var out = [];
    document.querySelectorAll("#med-list li").forEach(function (li) {
      var name = li.getAttribute("data-name");
      if (name) out.push(name);
    });
    return out;
  }

  on("btn-add-med", "click", function () {
    var inp = el("p-med");
    var v = inp.value.trim();
    if (!v) return;
    var li = document.createElement("li");
    li.setAttribute("data-name", v);
    li.appendChild(document.createTextNode(v));
    var rm = document.createElement("button");
    rm.textContent = "x";
    rm.type = "button";
    rm.onclick = function () { li.remove(); };
    li.appendChild(rm);
    el("med-list").appendChild(li);
    inp.value = "";
  });

  on("btn-start", "click", function () {
    var code = el("p-code").value.trim().toUpperCase();
    var age = el("p-age").value;
    var conds = [];
    document.querySelectorAll(".cond:checked").forEach(function (c) {
      if (c.value !== "None of these") conds.push(c.value);
    });
    var allNone = document.querySelector(".cond[value='None of these']").checked;
    var meds = collectMeds();
    if (!code || !age) { alert(t("onboard.err")); return; }
    state.profile = {
      code: code, ageGroup: age, conditions: allNone ? [] : conds,
      meds: meds, created: new Date().toISOString()
    };
    persist();
    showView("main");
  });

  /* ---------- Today tab ---------- */

  function renderMain() {
    el("today-label").textContent = prettyDate(todayISO());
    renderMeals();
    renderSupplements();
    renderReadings();
  }

  function renderMeals() {
    var wrap = el("meal-slots");
    wrap.innerHTML = "";
    var day = getDay(todayISO());
    MEALS.forEach(function (slot) {
      var row = document.createElement("div");
      row.className = "meal-row";

      var h = document.createElement("h3");
      h.textContent = t("meal." + slot);
      row.appendChild(h);

      var items = document.createElement("div");
      items.className = "items";
      day.meals[slot].forEach(function (it) {
        var chip = document.createElement("span");
        chip.className = "item-chip";
        chip.textContent = it;
        items.appendChild(chip);
      });
      row.appendChild(items);

      var add = document.createElement("div");
      add.className = "add";
      var inp = document.createElement("input");
      inp.type = "text";
      inp.placeholder = t("meal.add.ph");
      inp.addEventListener("keydown", function (e) { if (e.key === "Enter") doAdd(); });
      var btn = document.createElement("button");
      btn.className = "btn ghost small";
      btn.textContent = t("meal.add");
      btn.onclick = doAdd;
      function doAdd() {
        var v = inp.value.trim();
        if (!v) return;
        day.meals[slot].push(v);
        persist();
        inp.value = "";
        renderMeals();
      }
      add.appendChild(inp);
      add.appendChild(btn);
      row.appendChild(add);
      wrap.appendChild(row);
    });
  }

  function renderSupplements() {
    var day = getDay(todayISO());
    var list = el("sup-list");
    list.innerHTML = "";
    day.supplements.forEach(function (s, i) {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(s.name + (s.dose ? "  ·  " + s.dose : "")));
      var rm = document.createElement("button");
      rm.textContent = "x";
      rm.onclick = function () {
        day.supplements.splice(i, 1);
        persist();
        renderSupplements();
      };
      li.appendChild(rm);
      list.appendChild(li);
    });
  }

  on("btn-add-sup", "click", function () {
    var n = el("sup-name").value.trim();
    if (!n) return;
    var day = getDay(todayISO());
    day.supplements.push({ name: n, dose: el("sup-dose").value.trim() });
    persist();
    el("sup-name").value = ""; el("sup-dose").value = "";
    renderSupplements();
  });

  function renderReadings() {
    var r = getDay(todayISO()).readings;
    if (r.fasting != null) el("r-fasting").value = r.fasting;
    else el("r-fasting").value = "";
    document.querySelectorAll(".rating").forEach(function (grp) {
      var key = grp.getAttribute("data-key");
      grp.querySelectorAll("button").forEach(function (b) {
        b.classList.toggle("active", String(r[key]) === b.getAttribute("data-v"));
      });
    });
    if (r.sleep != null) el("r-sleep").value = r.sleep; else el("r-sleep").value = "";
    el("r-note").value = r.note || "";
  }

  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest(".rating button");
    if (!b) return;
    var grp = b.closest(".rating");
    var key = grp.getAttribute("data-key");
    var v = +b.getAttribute("data-v");
    getDay(todayISO()).readings[key] = v;
    persist();
    grp.querySelectorAll("button").forEach(function (x) {
      x.classList.toggle("active", x === b);
    });
  });

  on("btn-save-day", "click", function () {
    var r = getDay(todayISO()).readings;
    var f = el("r-fasting").value;
    r.fasting = f === "" ? null : +f;
    var sl = el("r-sleep").value;
    r.sleep = sl === "" ? null : +sl;
    r.note = el("r-note").value.trim();
    persist();
    var m = el("save-msg");
    m.textContent = t("today.saved") + " " + new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
  });

  /* ---------- History ---------- */

  function isLogged(iso) {
    var d = state.logs[iso];
    if (!d) return false;
    var any = false;
    MEALS.forEach(function (s) { if (d.meals[s].length) any = true; });
    if (d.supplements.length) any = true;
    var r = d.readings;
    if (r.fasting != null || r.energy != null || r.mood != null || r.sleep != null || r.note) any = true;
    return any;
  }

  function renderHistory() {
    var cal = el("calendar");
    cal.innerHTML = "";
    var today = todayISO();
    for (var i = -13; i <= 0; i++) {
      var iso = dateKey(i);
      var cell = document.createElement("button");
      cell.className = "cal-cell";
      if (isLogged(iso)) cell.classList.add("done");
      if (iso === today) cell.classList.add("today");
      var p = iso.split("-");
      cell.innerHTML = "<span class='d'>" + (+p[2]) + "</span><span class='dot'>" + (isLogged(iso) ? "●" : "") + "</span>";
      cell.onclick = (function (d) { return function () { renderDayDetail(d); }; })(iso);
      cal.appendChild(cell);
    }
    renderDayDetail(today);
  }

  function renderDayDetail(iso) {
    dayDetailDate = iso;
    var box = el("day-detail");
    if (!state.logs[iso]) {
      box.innerHTML = "<strong>" + prettyDate(iso) + "</strong><br>" + t("hist.noentries");
      return;
    }
    var d = state.logs[iso];
    var html = "<strong>" + prettyDate(iso) + "</strong>";
    MEALS.forEach(function (s) {
      if (d.meals[s].length) html += "<br>• <b>" + s + ":</b> " + d.meals[s].join(", ");
    });
    if (d.supplements.length) {
      html += "<br>• <b>" + t("hist.supplements") + "</b> " +
        d.supplements.map(function (s) { return s.name + (s.dose ? " (" + s.dose + ")" : ""); }).join(", ");
    }
    var r = d.readings;
    var bits = [];
    if (r.fasting != null) bits.push(t("hist.fasting") + " " + r.fasting + " mg/dL");
    if (r.energy != null) bits.push(t("hist.energy") + " " + r.energy + "/5");
    if (r.mood != null) bits.push(t("hist.mood") + " " + r.mood + "/5");
    if (r.sleep != null) bits.push(t("hist.sleep") + " " + r.sleep + "h");
    if (bits.length) html += "<br>• " + bits.join(" · ");
    if (r.note) html += "<br>• <i>" + r.note + "</i>";
    box.innerHTML = html;
  }

  /* ---------- Progress ---------- */

  function renderProgress() {
    var today = todayISO();
    var streak = 0;
    var i = 0;
    while (true) {
      var iso = dateKey(-i);
      if (isLogged(iso)) { streak++; i++; continue; }
      if (i === 0) { i++; continue; } // allow today to be pending
      break;
    }
    var dow = new Date().getDay(); // 0 Sun .. 6 Sat
    var daysPassed = (dow === 0 ? 6 : dow - 1); // Mon-based elapsed
    var loggedThisWeek = 0;
    for (var w = 0; w <= daysPassed; w++) {
      if (isLogged(dateKey(-w))) loggedThisWeek++;
    }
    var pct = daysPassed === 0 ? (isLogged(today) ? 100 : 0) : Math.round((loggedThisWeek / (daysPassed + 1)) * 100);
    el("stat-streak").textContent = streak;
    el("stat-week").textContent = pct + "%";
    el("stat-total").textContent = Object.keys(state.logs).filter(isLogged).length;
    el("exp-code").textContent = t("prog.export.participant") + " " + (state.profile ? state.profile.code : "-");
  }

  /* ---------- Export ---------- */

  function download(filename, text, mime) {
    var blob = new Blob([text], { type: mime || "text/csv;charset=utf-8;" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  }

  function csvEscape(v) {
    v = String(v == null ? "" : v);
    if (/[",\n]/.test(v)) v = '"' + v.replace(/"/g, '""') + '"';
    return v;
  }

  on("btn-exp-food", "click", function () {
    var code = state.profile ? state.profile.code : "K";
    var rows = ["participant,date,meal,food"];
    Object.keys(state.logs).sort().forEach(function (iso) {
      var d = state.logs[iso];
      MEALS.forEach(function (s) {
        d.meals[s].forEach(function (it) {
          rows.push([code, iso, s, it].map(csvEscape).join(","));
        });
      });
    });
    download("khai-food-log-" + code + "-" + todayISO() + ".csv", rows.join("\n"));
  });

  on("btn-exp-metric", "click", function () {
    var code = state.profile ? state.profile.code : "K";
    var rows = ["participant,date,fasting_mgdl,energy_1to5,mood_1to5,sleep_hours,note"];
    Object.keys(state.logs).sort().forEach(function (iso) {
      var r = state.logs[iso].readings;
      rows.push([code, iso,
        r.fasting == null ? "" : r.fasting,
        r.energy == null ? "" : r.energy,
        r.mood == null ? "" : r.mood,
        r.sleep == null ? "" : r.sleep,
        r.note || ""
      ].map(csvEscape).join(","));
    });
    download("khai-daily-metrics-" + code + "-" + todayISO() + ".csv", rows.join("\n"));
  });

  on("btn-exp-backup", "click", function () {
    download("khai-backup-" + todayISO() + ".json",
      JSON.stringify(state, null, 2), "application/json;charset=utf-8;");
  });

  on("btn-reset", "click", function () {
    if (!confirm(t("confirm.erase"))) return;
    localStorage.removeItem(LS_KEY);
    state = emptyState();
    showView("onboard");
  });

  /* ---------- Settings ---------- */

  function renderSettings() {
    var p = state.profile;
    el("set-identity").textContent = p
      ? "Participant " + p.code + " · " + p.ageGroup +
        (p.conditions.length ? " · " + p.conditions.join(", ") : "") +
        (p.meds.length ? " · meds: " + p.meds.join(", ") : "")
      : "No profile yet.";
  }

  on("btn-profile-edit", "click", function () { showView("onboard"); });
  on("btn-back-main", "click", function () { showView("main"); });
  on("btn-settings", "click", function () { showView("settings"); });

  document.querySelectorAll(".tab").forEach(function (b) {
    b.addEventListener("click", function () { showTab(b.getAttribute("data-tab")); });
  });

  /* ---------- Boot ---------- */

  if (state.profile) showView("main"); else showView("onboard");
})();