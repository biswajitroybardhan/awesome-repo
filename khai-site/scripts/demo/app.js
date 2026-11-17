/* Khai Tracker — browser demo: boot, router, delegated events. */
(function () {
  'use strict';
  var K = window.Khai;

  K.state = {
    tab: 'today',
    date: K.todayISO(),
    historyDate: K.todayISO()
  };

  var host = null;
  var tabs = null;

  // ---------------------------------------------------------------- persistence

  var persistTimer = 0;
  K.queuePersist = function () {
    clearTimeout(persistTimer);
    persistTimer = setTimeout(function () {
      K.persist();
      if (K.state.tab === 'today' && K.refreshTodayChrome) K.refreshTodayChrome();
    }, 350);
  };
  K.flush = function () {
    clearTimeout(persistTimer);
    persistTimer = 0;
    return K.persist();
  };
  window.addEventListener('beforeunload', function () {
    if (persistTimer) K.flush();
  });

  // ---------------------------------------------------------------- render

  K.setLang = function (lang) {
    K.lang = lang === 'hi' ? 'hi' : 'en';
    if (K.db) {
      K.db.settings = K.db.settings || {};
      K.db.settings.lang = K.lang;
      K.persist();
    }
    document.documentElement.lang = K.lang;
    K.render();
  };

  K.setTab = function (tab) {
    if (['today', 'history', 'progress', 'settings'].indexOf(tab) < 0) return;
    K.state.tab = tab;
    K.render();
    var body = document.getElementById('app-host');
    if (body) body.scrollTop = 0;
  };

  K.render = function (preserveScroll) {
    if (!host) return;
    var oldTab = host.getAttribute('data-tab') || K.state.tab;
    var scroll = host.scrollTop;
    var html;
    var onboarding = !K.db.profile;

    if (onboarding) {
      html = K.viewOnboarding();
    } else if (K.state.tab === 'history') {
      html = K.viewHistory();
    } else if (K.state.tab === 'progress') {
      html = K.viewProgress();
    } else if (K.state.tab === 'settings') {
      html = K.viewSettings();
    } else {
      html = K.viewToday();
    }

    host.innerHTML = html;
    host.setAttribute('data-tab', onboarding ? 'onboarding' : K.state.tab);
    host.scrollTop = preserveScroll && oldTab === K.state.tab ? scroll : 0;

    if (tabs) {
      tabs.hidden = onboarding;
      tabs.querySelectorAll('[data-tab]').forEach(function (b) {
        var on = b.getAttribute('data-tab') === K.state.tab;
        b.setAttribute('aria-selected', on ? 'true' : 'false');
        b.setAttribute('tabindex', on ? '0' : '-1');
        var label = b.querySelector('[data-tab-label]');
        if (label) label.textContent = K.t('tab' + b.getAttribute('data-tab').charAt(0).toUpperCase() + b.getAttribute('data-tab').slice(1));
      });
    }
    var badge = document.querySelector('[data-demo-badge]');
    if (badge) badge.textContent = K.t('demoBadge');
    var langBtn = document.querySelector('[data-act="toggle-lang"]');
    if (langBtn) {
      langBtn.textContent = K.t('langName');
      langBtn.setAttribute('aria-label', K.t('langSwitchLabel') + ': ' + K.t('langName'));
    }
    var brandSub = document.querySelector('[data-brand-sub]');
    if (brandSub) brandSub.textContent = K.t('brandSub');

    K.mountView();
  };

  // ---------------------------------------------------------------- events

  function selectedDate() { return K.state.date; }

  function fieldValue(input) {
    var v = input.value;
    if (input.getAttribute('data-field') === 'note') return v.slice(0, 500);
    if (v === '' || v == null) return null;
    var n = Number(v);
    return isFinite(n) ? n : null;
  }

  document.addEventListener('input', function (e) {
    var input = e.target;
    if (!input || !input.getAttribute) return;
    var field = input.getAttribute('data-field');
    if (!field) return;
    var eDay = K.editDay(selectedDate());
    var val = fieldValue(input);
    if (input.getAttribute('data-kind') === 'numeric' && val != null) val = Math.round(val);
    eDay[field] = val;
    K.touch(eDay);
    if (field === 'note') {
      var counter = document.getElementById('note-count');
      if (counter) counter.textContent = eDay.note.length + '/500';
    }
    if (K.refreshTodayChrome) K.refreshTodayChrome();
  });

  document.addEventListener('change', function (e) {
    var input = e.target;
    if (!input || !input.getAttribute) return;
    var field = input.getAttribute('data-field');
    if (!field || field === 'note') return;
    var val = fieldValue(input);
    var min = input.getAttribute('min'), max = input.getAttribute('max');
    if (val != null && ((min != null && val < Number(min)) || (max != null && val > Number(max)))) {
      K.toast('Check this value — it looks outside the usual range.');
    }
    var eDay = K.editDay(selectedDate());
    if (input.getAttribute('data-kind') === 'numeric' && val != null) val = Math.round(val);
    eDay[field] = val;
    K.touch(eDay);
    input.value = val == null ? '' : K.num(val);
  });

  function pressed(groupSelector, attr, value) {
    document.querySelectorAll(groupSelector).forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute(attr) === value ? 'true' : 'false');
    });
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-act]');
    if (b) { handleAction(b, e); return; }
    var tab = e.target.closest('[data-tab]');
    if (tab) { K.setTab(tab.getAttribute('data-tab')); }
  });

  function handleAction(b, ev) {
    var act = b.getAttribute('data-act');
    var date = selectedDate();

    if (act === 'prev-day') {
      K.state.date = K.shift(date, -1);
      K.render(); host.scrollTop = 0;
    } else if (act === 'next-day') {
      var next = K.shift(date, 1);
      if (next <= K.todayISO()) { K.state.date = next; K.render(); host.scrollTop = 0; }
    } else if (act === 'jump-today') {
      K.state.date = K.todayISO(); K.render(); host.scrollTop = 0;
    } else if (act === 'add-food') {
      K.openFoodPicker(b.getAttribute('data-slot'));
    } else if (act === 'remove-food') {
      var slot = b.getAttribute('data-slot');
      var idx = Number(b.getAttribute('data-idx'));
      var eDay = K.day(date, false);
      if (eDay && eDay.meals[slot] && eDay.meals[slot][idx]) {
        eDay.meals[slot].splice(idx, 1);
        K.touch(eDay);
        K.render(true);
        K.toast(K.t('removedToast'));
      }
    } else if (act === 'med') {
      var day = K.editDay(date);
      var name = b.getAttribute('data-name');
      var dose = b.getAttribute('data-dose');
      var status = b.getAttribute('data-status');
      day.meds = day.meds.filter(function (m) { return m.name !== name; });
      day.meds.push({ name: name, dose: dose, status: status });
      K.touch(day);
      document.querySelectorAll('[data-act="med"][data-name="' + cssEscape(name) + '"]').forEach(function (x) {
        x.setAttribute('aria-pressed', x.getAttribute('data-status') === status ? 'true' : 'false');
      });
      K.refreshTodayChrome();
    } else if (act === 'glucose-type') {
      var d2 = K.editDay(date);
      d2.glucoseType = b.getAttribute('data-value') === 'pp' ? 'pp' : 'fasting';
      K.touch(d2);
      document.querySelectorAll('[data-act="glucose-type"]').forEach(function (x) {
        x.setAttribute('aria-pressed', x.getAttribute('data-value') === d2.glucoseType ? 'true' : 'false');
      });
    } else if (act === 'scale') {
      var field = b.getAttribute('data-field');
      var value = Number(b.getAttribute('data-value'));
      var d3 = K.editDay(date);
      d3[field] = value;
      K.touch(d3);
      document.querySelectorAll('[data-act="scale"][data-field="' + field + '"]').forEach(function (x) {
        x.setAttribute('aria-pressed', Number(x.getAttribute('data-value')) === value ? 'true' : 'false');
      });
    } else if (act === 'save-day') {
      var ok = K.flush();
      K.toast(ok ? K.t('savedToast') : K.t('saveFailed'));
      K.refreshTodayChrome();
    } else if (act === 'pick-history') {
      K.state.historyDate = b.getAttribute('data-date');
      K.state.tab = 'history';
      K.render(true);
      var detail = document.getElementById('day-detail');
      if (detail) setTimeout(function () { detail.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }, 20);
    } else if (act === 'edit-history') {
      K.state.date = b.getAttribute('data-date');
      K.state.tab = 'today';
      K.render();
      host.scrollTop = 0;
    } else if (act === 'go-today') {
      K.state.tab = 'today'; K.state.date = K.todayISO(); K.render(); host.scrollTop = 0;
    } else if (act === 'set-lang') {
      K.setLang(b.getAttribute('data-value'));
    } else if (act === 'toggle-lang') {
      K.setLang(K.lang === 'hi' ? 'en' : 'hi');
    } else if (act === 'edit-profile') {
      K.openProfileDialog();
    } else if (act === 'export') {
      doExport(b.getAttribute('data-kind'));
    } else if (act === 'load-sample') {
      K.confirm({
        title: K.t('sampleTitle'), body: K.t('sampleBody'),
        confirmLabel: K.t('loadSample'), onConfirm: function () {
          K.sample();
          K.state.date = K.todayISO();
          K.state.historyDate = K.todayISO();
          K.state.tab = 'today';
          K.render();
          K.toast(K.t('sampleLoaded'));
        }
      });
    } else if (act === 'erase') {
      K.confirm({
        title: K.t('eraseConfirmTitle'), body: K.t('eraseConfirmBody'),
        confirmLabel: K.t('eraseYes'), danger: true, onConfirm: function () {
          try { localStorage.removeItem(K.STORAGE_KEY); } catch (err) {}
          K.db = K.blankDb();
          K.lang = 'en';
          document.documentElement.lang = 'en';
          K.state = { tab: 'today', date: K.todayISO(), historyDate: K.todayISO() };
          K.persist();
          K.render();
          K.toast(K.t('erasedToast'));
        }
      });
    }
  }

  function cssEscape(s) {
    if (window.CSS && CSS.escape) return CSS.escape(s);
    return String(s).replace(/["\\]/g, '\\$&');
  }

  function doExport(kind) {
    var days = K.sortedDays();
    if (!days.length) { K.toast(K.t('noDataToast')); return; }
    if (kind === 'print') { K.printSummary(); return; }
    if (kind === 'metrics') {
      K.download(K.fileName('metrics'), K.metricsCsv(), 'text/csv');
    } else if (kind === 'food') {
      if (!days.some(K.hasFood)) { K.toast(K.t('noDataToast')); return; }
      K.download(K.fileName('food'), K.foodCsv(), 'text/csv');
    } else if (kind === 'backup') {
      K.download(K.fileName('backup'), JSON.stringify(K.backup(), null, 2), 'application/json');
    } else if (kind === 'fhir') {
      if (!days.some(K.hasReading)) { K.toast(K.t('noDataToast')); return; }
      K.download(K.fileName('fhir'), JSON.stringify(K.fhir(), null, 2), 'application/fhir+json');
    } else {
      return;
    }
    var names = { metrics: K.fileName('metrics'), food: K.fileName('food'), backup: K.fileName('backup'), fhir: K.fileName('fhir') };
    K.toast(K.t('downloadToast', { name: names[kind] }));
  }

  K.confirm = function (opts) {
    var root = K.openDialog({
      title: opts.title, body: '<p style="font-size:.875rem;color:var(--ink-2);line-height:1.6">' + K.esc(opts.body) + '</p>',
      foot: '<button class="btn-app ghost" type="button" data-dialog-close>' + K.esc(K.t('cancel')) + '</button>' +
        '<button class="btn-app ' + (opts.danger ? 'danger' : '') + '" type="button" id="confirm-yes">' + K.esc(opts.confirmLabel || K.t('confirm')) + '</button>'
    });
    root.querySelector('#confirm-yes').addEventListener('click', function () {
      K.closeDialog();
      if (opts.onConfirm) opts.onConfirm();
    });
  };

  // ---------------------------------------------------------------- boot

  K.load();
  document.documentElement.lang = K.lang;
  host = document.getElementById('app-host');
  tabs = document.getElementById('app-tabs');
  if (!host) return;
  K.render();

  // A link from the landing page to #print should land on the export controls.
  if (location.hash === '#print' && K.db.profile) {
    K.state.tab = 'settings';
    K.render();
    var printBtn = document.querySelector('[data-act="export"][data-kind="print"]');
    if (printBtn) {
      setTimeout(function () {
        printBtn.scrollIntoView({ block: 'center', behavior: 'smooth' });
        printBtn.focus({ preventScroll: true });
        K.toast(K.t('printHint'));
      }, 120);
    }
  }

  if (!K.storageOk) {
    setTimeout(function () { K.toast(K.t('saveFailed')); }, 800);
  }
})();
