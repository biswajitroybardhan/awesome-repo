/* Khai Tracker — browser demo: onboarding, history, progress, settings, print. */
(function () {
  'use strict';
  var K = window.Khai = window.Khai || {};

  // ---------------------------------------------------------------- onboarding

  K.viewOnboarding = function () {
    var html = '<div class="onboard-head">' +
      '<img class="app-mark" src="assets/mark.svg" alt="">' +
      '<div class="app-kicker" style="color:#a9c4ad">' + K.esc(K.t('stepProfile')) + '</div>' +
      '<h2 style="margin-top:6px">' + K.esc(K.t('welcomeTitle')) + '</h2>' +
      '<p>' + K.esc(K.t('welcomeBody')) + '</p>' +
    '</div>' +
    '<div class="onboard-body">' +
      '<form id="onboard-form" novalidate>' +
        '<div class="form-error" id="onboard-error" role="alert"></div>' +
        '<div class="field"><label for="ob-code">' + K.esc(K.t('codeLabel')) + '</label>' +
          '<input id="ob-code" name="code" type="text" maxlength="24" autocomplete="off" spellcheck="false" placeholder="' + K.attr(K.t('codePh')) + '"></div>' +
        '<div class="field"><label for="ob-age">' + K.esc(K.t('ageLabel')) + '</label>' +
          '<select id="ob-age" name="age"><option value="">' + K.esc(K.t('choose')) + '</option>' +
          K.AGE_BANDS.map(function (a) { return '<option value="' + a.key + '">' + K.esc(K.label(a)) + '</option>'; }).join('') +
          '</select></div>' +
        '<div class="field"><span class="field-label">' + K.esc(K.t('conditionsLabel')) + '</span>' +
          '<div class="chip-grid">' + K.CONDITIONS.map(function (c) {
            return '<label class="chip"><input type="checkbox" name="conditions" value="' + c.key + '">' + K.icon('check', 12) + K.esc(K.label(c)) + '</label>';
          }).join('') + '</div></div>' +
        '<div class="field"><span class="field-label">' + K.esc(K.t('medsLabel')) + '</span>' +
          '<div id="ob-meds">' + medRow() + '</div>' +
          '<button class="link-app" type="button" id="ob-add-med" style="margin-top:6px">' + K.esc(K.t('addMed')) + '</button></div>' +
        '<div class="consent"><b>' + K.esc(K.t('consentTitle')) + '</b><br>' + K.esc(K.t('consentBody')) + '</div>' +
        '<label class="checkline"><input type="checkbox" id="ob-consent"> <span>' + K.esc(K.t('consentCheck')) + '</span></label>' +
        '<p class="hint" style="margin-top:10px">' + K.esc(K.t('onboardStorage')) + '</p>' +
        '<button class="btn-app block" type="submit" style="margin-top:16px">' + K.esc(K.t('start')) + '</button>' +
        '<p class="hint" style="text-align:center;margin-top:14px">' + K.esc(K.t('demoOnly')) + '</p>' +
      '</form>' +
    '</div>';
    return html;
  };

  function medRow(name, dose, first) {
    return '<div class="med-input-row" style="display:grid;grid-template-columns:minmax(0,1fr) 92px 30px;gap:6px;margin-bottom:6px">' +
      '<input class="med-name" type="text" maxlength="40" autocomplete="off" placeholder="' + K.attr(K.t('medNamePh')) + '" value="' + K.attr(name || '') + '">' +
      '<input class="med-dose" type="text" maxlength="24" autocomplete="off" placeholder="' + K.attr(K.t('dosePh')) + '" value="' + K.attr(dose || '') + '">' +
      '<button class="remove-x" type="button" data-remove-med aria-label="' + K.attr(K.t('medRemove')) + '">' + (first ? '' : K.icon('x', 13)) + '</button>' +
    '</div>';
  }

  function collectMeds(root) {
    var out = [], bad = false;
    root.querySelectorAll('.med-input-row').forEach(function (row) {
      var name = row.querySelector('.med-name').value.trim();
      var dose = row.querySelector('.med-dose').value.trim();
      if (!name && !dose) return;
      if (!name) { bad = true; return; }
      if (out.some(function (m) { return m.name.toLowerCase() === name.toLowerCase(); })) return;
      out.push({ name: name, dose: dose });
    });
    return { meds: out, bad: bad };
  }

  K.mountOnboarding = function () {
    var form = document.getElementById('onboard-form');
    if (!form) return;
    var medsBox = document.getElementById('ob-meds');
    document.getElementById('ob-add-med').addEventListener('click', function () {
      var tmp = document.createElement('div');
      tmp.innerHTML = medRow('', '', false);
      medsBox.appendChild(tmp.firstChild);
      var inputs = medsBox.querySelectorAll('.med-name');
      if (inputs.length) inputs[inputs.length - 1].focus();
    });
    medsBox.addEventListener('click', function (e) {
      var b = e.target.closest('[data-remove-med]');
      if (!b) return;
      if (medsBox.querySelectorAll('.med-input-row').length <= 1) {
        var r = b.closest('.med-input-row');
        r.querySelectorAll('input').forEach(function (i) { i.value = ''; });
        return;
      }
      b.closest('.med-input-row').remove();
    });
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var err = document.getElementById('onboard-error');
      var code = form.querySelector('#ob-code').value.trim();
      var age = form.querySelector('#ob-age').value;
      var consent = document.getElementById('ob-consent').checked;
      var meds = collectMeds(form);
      var msg = '';
      if (!code) msg = K.t('errCode');
      else if (!age) msg = K.t('errAge');
      else if (meds.bad) msg = K.t('errMed');
      else if (!consent) msg = K.t('errConsent');
      if (msg) {
        err.textContent = msg;
        err.classList.add('show');
        err.scrollIntoView({ block: 'nearest' });
        return;
      }
      err.classList.remove('show');
      var conditions = [];
      form.querySelectorAll('input[name="conditions"]:checked').forEach(function (c) { conditions.push(c.value); });
      K.db.profile = {
        code: code, ageBandKey: age, conditionKeys: conditions, medicines: meds.meds,
        consentVersion: '1.0-demo', consentAt: Date.now(), deviceId: K.db.deviceId,
        createdAt: Date.now()
      };
      if (!K.persist()) { K.toast(K.t('saveFailed')); }
      K.state.tab = 'today';
      K.state.date = K.todayISO();
      K.render();
    });
  };

  // ---------------------------------------------------------------- history

  function dayStatusLabel(e) {
    var s = K.dayStatus(e);
    return s === 'complete' ? K.t('dayComplete') : s === 'partial' ? K.t('dayPartial') : K.t('dayEmpty');
  }

  function statusLegend(e) {
    if (!e) return K.t('legendEmpty');
    var s = K.dayStatus(e);
    return s === 'complete' ? K.t('legendComplete') : s === 'partial' ? K.t('legendPartial') : K.t('legendEmpty');
  }

  function statusPillClass(e) {
    if (!e) return 'quiet';
    var s = K.dayStatus(e);
    return s === 'complete' ? 'green' : s === 'partial' ? 'warn' : 'quiet';
  }

  function foodSummary(e) {
    var names = [];
    K.MEALS.forEach(function (slot) {
      (e.meals[slot] || []).forEach(function (f) { names.push(K.foodLabel(f.id, f.label)); });
    });
    return names.length ? names.join(', ') : '—';
  }

  K.viewHistory = function () {
    var selected = K.state.historyDate || K.todayISO();
    var win = K.lastN(21);
    var firstDow = K.dowOf(win[0]);
    var html = '<div class="app-view tight">';
    html += '<div class="history-head"><h2>' + K.esc(K.t('historyTitle')) + '</h2>' +
      '<p class="hint">' + K.esc(K.t('historyHint')) + '</p></div>';

    html += '<div class="history-grid" role="group" aria-label="' + K.attr(K.t('historyTitle')) + '">';
    var dows = K.lang === 'hi' ? K.DOW_HI : K.DOW_EN;
    for (var i = 0; i < 7; i++) html += '<span class="history-dow">' + K.esc(dows[i]) + '</span>';
    for (var b = 0; b < firstDow; b++) html += '<span aria-hidden="true"></span>';
    win.forEach(function (date) {
      var e = K.day(date, false);
      var status = e ? K.dayStatus(e) : 'empty';
      var d = K.parseISO(date);
      html += '<button class="h-cell ' + status + (date === K.todayISO() ? ' today' : '') + '" type="button" ' +
        'data-act="pick-history" data-date="' + date + '" aria-pressed="' + (date === selected ? 'true' : 'false') + '" ' +
        'aria-label="' + K.attr(K.longDate(date) + ': ' + (e ? dayStatusLabel(e) : K.t('nothingLogged'))) + '">' +
        '<span>' + d.getDate() + '</span>' +
        (e && K.hasFood(e) ? '<span class="dot"></span>' : '') +
      '</button>';
    });
    html += '</div>';

    html += '<div class="h-legend">' +
      '<span><i class="c"></i>' + K.esc(K.t('legendComplete')) + '</span>' +
      '<span><i class="p"></i>' + K.esc(K.t('legendPartial')) + '</span>' +
      '<span><i></i>' + K.esc(K.t('legendEmpty')) + '</span></div>';

    // selected day
    var se = K.day(selected, false);
    html += '<div class="day-detail" id="day-detail"><h3>' + K.esc(K.t('dayDetail')) + '</h3>' +
      '<div style="display:flex;justify-content:space-between;align-items:baseline;gap:10px;margin-bottom:6px">' +
        '<b style="font-family:var(--serif);font-size:1.05rem">' + K.esc(K.longDate(selected)) + '</b>' +
        '<span class="pill ' + statusPillClass(se) + '">' + K.esc(statusLegend(se)) + '</span>' +
      '</div>';
    if (!se) {
      html += '<p class="empty">' + K.esc(K.t('nothingLogged')) + '</p>';
    } else {
      html += row(K.t('foodLogged'), foodSummary(se));
      if (se.meds.length) {
        html += row(K.t('medsTitle'), se.meds.map(function (m) {
          return K.esc(m.name) + ' — ' + K.esc(K.t(m.status === 'taken' ? 'taken' : m.status === 'skipped' ? 'skipped' : 'changed'));
        }).join('<br>'));
      } else {
        html += row(K.t('medsTitle'), K.esc(K.t('notLogged')));
      }
      var reads = [];
      if (se.sys != null && se.dia != null) reads.push(se.sys + '/' + se.dia + ' mmHg');
      if (se.glucose != null) reads.push(K.num(se.glucose) + ' mg/dL ' + K.t(se.glucoseType === 'fasting' ? 'fasting' : 'afterFood'));
      if (se.weight != null) reads.push(K.num(se.weight) + ' kg');
      if (se.sleep != null) reads.push(K.num(se.sleep) + ' ' + K.t('sleepUnit'));
      html += row(K.t('readingLogged'), reads.length ? reads.map(K.esc).join('<br>') : K.esc(K.t('notLogged')));
      if (se.note) html += '<div class="dd-note">' + K.esc(se.note) + '</div>';
    }
    html += '<button class="btn-app ghost small" style="margin-top:10px" type="button" data-act="edit-history" data-date="' + selected + '">' +
      K.esc(K.t('editDay')) + '</button></div>';

    // recent
    var recent = K.sortedDays().filter(function (e) { return e.date <= K.todayISO(); }).reverse().slice(0, 7);
    if (recent.length) {
      html += '<div style="padding:18px 16px 0"><h3>' + K.esc(K.t('recentDays')) + '</h3></div><div class="recent-list">';
      recent.forEach(function (e) {
        html += '<button class="recent-item" type="button" data-act="pick-history" data-date="' + e.date + '">' +
          '<span class="d">' + K.esc(K.prettyDate(e.date)) + '</span>' +
          '<span class="t">' + K.esc(foodSummary(e)) + '</span>' +
          '<span class="s">' + K.esc(statusLegend(e)) + '</span>' +
        '</button>';
      });
      html += '</div>';
    }
    html += '</div>';
    return html;
  };

  function row(label, value) {
    return '<div class="dd-row"><span>' + K.esc(label) + '</span><span>' + value + '</span></div>';
  }

  // ---------------------------------------------------------------- progress

  K.viewProgress = function () {
    var c = K.completeness();
    var days = K.sortedDays();
    var last7 = K.lastN(7);
    var weekLogged = last7.filter(function (d) { return !!K.db.days[d]; }).length;
    var insights = K.insights();
    var html = '<div class="app-view tight">';

    html += '<div class="progress-head"><h2>' + K.esc(K.t('progressTitle')) + '</h2>' +
      '<div class="app-kicker" style="margin-top:10px">' + K.esc(K.t('completeness')) + '</div>' +
      '<div class="big-pct">' + c.pct + '%</div>' +
      '<div class="progress-sub">' + K.esc(
        (K.lang === 'en' && c.logged === 1 ? K.t('progressFmtOne') : K.t('progressFmt'))
          .replace('{complete}', c.complete).replace('{total}', 21).replace('{logged}', c.logged)
      ) + '</div>' +
      '<div class="bar" role="img" aria-label="' + K.attr(c.pct + '%') + '"><i style="width:' + Math.max(1, c.pct) + '%"></i></div>' +
      '<p class="hint">' + K.esc(K.t('completenessHint')) + '</p></div>';

    html += '<div class="stat-row">' +
      '<div class="stat-card"><b>' + K.streak() + '</b><span>' + K.esc(K.t('streak')) + '</span></div>' +
      '<div class="stat-card"><b>' + weekLogged + '</b><span>' + K.esc(K.t('thisWeek')) + '</span></div>' +
      '<div class="stat-card"><b>' + days.length + '</b><span>' + K.esc(K.t('totalLogged')) + '</span></div>' +
    '</div>';

    html += '<div style="padding:18px 16px 0"><h3>' + K.esc(K.t('last7')) + '</h3>' +
      '<div class="week-chart" role="img" aria-label="' + K.attr(K.t('last7')) + '">';
    last7.forEach(function (date) {
      var e = K.day(date, false);
      var st = e ? K.daySteps(e) : { done: 0, total: 2 };
      var pct = st.total ? Math.round(st.done / st.total * 100) : 0;
      var d = K.parseISO(date);
      var dow = (K.lang === 'hi' ? K.DOW_HI : K.DOW_EN)[d.getDay()];
      html += '<div class="bar-col' + (pct > 0 ? ' on' : '') + '" title="' + K.attr(K.prettyDate(date) + ' · ' + pct + '%') + '">' +
        '<i style="height:' + Math.max(2, pct) + '%"></i><em>' + K.esc(dow.slice(0, 2)) + '</em></div>';
    });
    html += '</div></div>';

    // averages
    var recent = days.slice(-7);
    var bp = recent.filter(function (e) { return e.sys != null && e.dia != null; });
    var fast = recent.filter(function (e) { return e.glucose != null && e.glucoseType === 'fasting'; });
    var weights = recent.filter(function (e) { return e.weight != null; });
    var avgSys = bp.length ? K.round(K.average(bp.map(function (e) { return e.sys; }))) : null;
    var avgDia = bp.length ? K.round(K.average(bp.map(function (e) { return e.dia; }))) : null;
    var avgGlu = fast.length ? K.round(K.average(fast.map(function (e) { return e.glucose; }))) : null;
    var delta = weights.length >= 2 ? K.one(weights[weights.length - 1].weight - weights[0].weight) : null;
    var medSlots = recent.reduce(function (n, e) { return n + e.meds.length; }, 0);
    var medTaken = recent.reduce(function (n, e) { return n + e.meds.filter(function (m) { return m.status === 'taken'; }).length; }, 0);

    html += '<div class="stat-row" style="grid-template-columns:repeat(3,1fr)">' +
      '<div class="stat-card"><b>' + (avgSys != null ? avgSys + '/' + avgDia : '—') + '</b><span>' + K.esc(K.t('avgBp')) + '</span></div>' +
      '<div class="stat-card"><b>' + (avgGlu != null ? avgGlu : '—') + '</b><span>' + K.esc(K.t('avgGlucose')) + '</span></div>' +
      '<div class="stat-card"><b>' + (delta != null ? (delta > 0 ? '+' : '') + K.num(delta) : '—') + '</b><span>' + K.esc(K.t('weightChange')) + '</span></div>' +
    '</div>';

    html += '<div style="padding:20px 16px 0"><h3>' + K.esc(K.t('insightsTitle')) + '</h3>';
    if (!insights.length) {
      html += '<p class="hint" style="margin-top:8px">' + K.esc(K.t('insightsEmpty')) + '</p>';
    } else {
      insights.forEach(function (i) {
        html += '<div class="insight"><div class="k">' + K.esc(K.t(i.strength)) + '</div>' +
          '<b>' + K.esc(i.headline) + '</b><p>' + K.esc(i.detail) + '</p></div>';
      });
      html += '<p class="hint">' + K.esc(K.t('insightsCaveat')) + '</p>';
    }
    html += '</div>';

    // weekly plan draft — illustrative, built only from this person's logged days
    function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
    var plan = K.planDraft();
    html += '<section class="plan-section" id="plan"><h3>' + K.esc(K.t('planTitle')) + '</h3>' +
      '<p class="plan-intro">' + K.esc(K.t('planIntro')) + '</p>';
    if (!plan.ready) {
      html += '<p class="hint">' + K.esc(K.t('planEmpty')) + '</p>';
    } else {
      html += '<div class="plan-meta"><span class="pill ' + (plan.lowConfidence ? 'warn' : 'quiet') + '">' +
        K.esc(K.t(plan.confidence)) + '</span>' +
        '<span class="hint">' + K.esc(K.t('planPaired').replace('{n}', plan.pairedDays)) + '</span></div>';
      if (plan.lowConfidence) html += '<p class="hint">' + K.esc(K.t('planLowConfidence')) + '</p>';
      html += '<p class="hint">' + K.esc(K.t('planConfidenceBody')) + '</p>';

      plan.items.forEach(function (it) {
        var dec = it.decision;
        html += '<article class="plan-card' + (dec ? ' decided decided-' + dec : '') + '">' +
          '<div class="plan-top"><span class="pill ' + K.esc(it.type) + '">' + K.esc(K.t('planType' + cap(it.type))) + '</span>' +
          '<span class="plan-draft-label">' + K.esc(K.t('planDraftLabel')) + '</span></div>' +
          '<b>' + K.esc(it.title) + '</b>' +
          '<div class="plan-evidence"><span>' + K.esc(K.t('planEvidence')) + '</span><p>' + K.esc(it.reason) + '</p></div>';
        if (dec) {
          html += '<div class="plan-decision"><span>' + K.esc(K.t('planDecision')) + ': <b>' +
            K.esc(K.t('plan' + cap(dec) + 'State')) + '</b></span>' +
            '<button type="button" class="link-btn" data-act="plan-decision" data-id="' + K.attr(it.id) + '" data-value="">' +
            K.esc(K.t('planClear')) + '</button></div>';
        } else {
          html += '<div class="plan-actions">' +
            '<button type="button" class="btn-app small" data-act="plan-decision" data-id="' + K.attr(it.id) + '" data-value="accepted">' + K.esc(K.t('planAccept')) + '</button>' +
            '<button type="button" class="btn-app ghost small" data-act="plan-decision" data-id="' + K.attr(it.id) + '" data-value="edited">' + K.esc(K.t('planEdit')) + '</button>' +
            '<button type="button" class="btn-app ghost small" data-act="plan-decision" data-id="' + K.attr(it.id) + '" data-value="rejected">' + K.esc(K.t('planReject')) + '</button>' +
            '</div>';
        }
        html += '</article>';
      });

      html += '<div class="plan-flags"><h4>' + K.esc(K.t('escalateTitle')) + '</h4>' +
        '<p class="hint">' + K.esc(K.t('escalateBody')) + '</p><ul>';
      plan.flags.forEach(function (f) { html += '<li>' + K.esc(f) + '</li>'; });
      html += '</ul></div>';
    }
    html += '<p class="hint plan-caveat">' + K.esc(K.t('planNotAdvice')) + '</p>';
    html += '</section>';

    if (medSlots > 0) {
      html += '<div style="padding:18px 16px 0"><h3>' + K.esc(K.t('adherence')) + '</h3>' +
        '<div class="estimate-row" style="margin-top:4px"><span>' + K.esc(K.t('last7')) + '</span><span><b>' +
        Math.round(medTaken * 100 / medSlots) + '%</b> · ' + medTaken + '/' + medSlots + '</span></div></div>';
    }

    if (!days.length) {
      html += '<div style="padding:20px 16px 0"><button class="btn-app block" type="button" data-act="go-today">' + K.esc(K.t('addFood')) + '</button></div>';
    }
    html += '</div>';
    return html;
  };

  // ---------------------------------------------------------------- settings

  K.viewSettings = function () {
    var p = K.db.profile || {};
    var conditions = (p.conditionKeys || []).map(K.conditionLabel);
    var meds = p.medicines || [];
    var html = '<div class="app-view">';
    html += '<h2>' + K.esc(K.t('settingsTitle')) + '</h2>';

    html += '<section class="app-section"><h3><span>' + K.esc(K.t('profileTitle')) + '</span></h3>' +
      '<div class="profile-card"><div class="code">' + K.esc(p.code || '—') + '</div>' +
        '<div class="meta">' + K.esc(K.t('ageShort')) + ': ' + K.esc(p.ageBandKey ? K.ageLabel(p.ageBandKey) : '—') + '<br>' +
        K.esc(K.t('conditionsShort')) + ': ' + K.esc(conditions.length ? conditions.join(', ') : '—') + '<br>' +
        K.esc(K.t('medsShort')) + ': ' + K.esc(meds.length ? meds.map(function (m) { return m.name + (m.dose ? ' ' + m.dose : ''); }).join(', ') : '—') + '</div></div>' +
      '<button class="btn-app ghost small" type="button" data-act="edit-profile">' + K.esc(K.t('editProfile')) + '</button>' +
    '</section>';

    html += '<section class="app-section"><h3><span>' + K.esc(K.t('language')) + '</span></h3>' +
      '<div class="setting-row"><div class="label"><b>' + K.esc(K.t('language')) + '</b><div class="desc">' + K.esc(K.t('languageHint')) + '</div></div>' +
        '<div class="lang-switch"><button type="button" data-act="set-lang" data-value="en" aria-pressed="' + (K.lang === 'en' ? 'true' : 'false') + '">English</button>' +
        '<button type="button" data-act="set-lang" data-value="hi" aria-pressed="' + (K.lang === 'hi' ? 'true' : 'false') + '">हिंदी</button></div></div>' +
    '</section>';

    html += '<section class="app-section"><h3><span>' + K.esc(K.t('exportsTitle')) + '</span></h3>' +
      '<p class="hint" style="margin-top:0;margin-bottom:10px">' + K.esc(K.t('exportsHint')) + '</p>' +
      '<div class="export-grid">' +
        exportBtn('metrics', 'CSV', K.t('exportMetrics'), K.t('exportMetricsDesc')) +
        exportBtn('food', 'CSV', K.t('exportFood'), K.t('exportFoodDesc')) +
        exportBtn('backup', 'JSON', K.t('exportBackup'), K.t('exportBackupDesc')) +
        exportBtn('fhir', 'FHIR', K.t('exportFhir'), K.t('exportFhirDesc')) +
        exportBtn('print', 'PDF', K.t('exportPrint'), K.t('exportPrintDesc')) +
      '</div>' +
      '<p class="hint">' + K.esc(K.t('printHint')) + '</p>' +
    '</section>';

    html += '<section class="app-section"><h3><span>' + K.esc(K.t('sampleTitle')) + '</span></h3>' +
      '<p class="hint" style="margin-top:0">' + K.esc(K.t('sampleBody')) + '</p>' +
      '<button class="btn-app ghost small" type="button" data-act="load-sample">' + K.esc(K.t('loadSample')) + '</button>' +
    '</section>';

    html += '<section class="app-section"><h3><span>' + K.esc(K.t('eraseTitle')) + '</span></h3>' +
      '<div class="danger-zone"><b>' + K.esc(K.t('eraseBtn')) + '</b><p>' + K.esc(K.t('eraseBody')) + '</p>' +
      '<button class="btn-app danger small" type="button" data-act="erase">' + K.esc(K.t('eraseBtn')) + '</button></div>' +
    '</section>';

    html += '<section class="app-section"><h3><span>' + K.esc(K.t('aboutTitle')) + '</span></h3>' +
      '<p class="hint" style="margin-top:0">' + K.esc(K.t('aboutBody')) + '</p>' +
      '<p class="hint">' + K.esc(K.t('demoOnly')) + '</p>' +
      '<div class="pill-row" style="margin-top:10px"><span class="pill quiet">' + K.icon('lock', 11) + ' localStorage</span>' +
      '<span class="pill quiet">v1.0.0</span><span class="pill quiet">' + K.esc(K.t('footerNote')) + '</span></div>' +
    '</section>';

    html += '</div>';
    return html;
  };

  function exportBtn(kind, tag, title, desc) {
    return '<button class="export-btn" type="button" data-act="export" data-kind="' + kind + '">' +
      '<span class="ico">' + K.esc(tag) + '</span>' +
      '<span><b>' + K.esc(title) + '</b><span>' + K.esc(desc) + '</span></span>' +
      K.icon(kind === 'print' ? 'printer' : 'download', 14) +
    '</button>';
  }

  // ---------------------------------------------------------------- profile dialog

  K.openProfileDialog = function () {
    var p = K.db.profile || {};
    var rows = (p.medicines && p.medicines.length ? p.medicines : [{ name: '', dose: '' }]).map(function (m, i) {
      return medRow(m.name, m.dose, i === 0 && !(p.medicines || []).length);
    }).join('');
    var body = '<div class="form-error" id="prof-error" role="alert"></div>' +
      '<div class="field"><label for="prof-code">' + K.esc(K.t('codeLabel')) + '</label>' +
        '<input id="prof-code" type="text" maxlength="24" autocomplete="off" value="' + K.attr(p.code || '') + '"></div>' +
      '<div class="field"><label for="prof-age">' + K.esc(K.t('ageLabel')) + '</label><select id="prof-age">' +
        '<option value="">' + K.esc(K.t('choose')) + '</option>' +
        K.AGE_BANDS.map(function (a) { return '<option value="' + a.key + '"' + (p.ageBandKey === a.key ? ' selected' : '') + '>' + K.esc(K.label(a)) + '</option>'; }).join('') +
      '</select></div>' +
      '<div class="field"><span class="field-label">' + K.esc(K.t('conditionsLabel')) + '</span><div class="chip-grid">' +
        K.CONDITIONS.map(function (c) {
          var on = (p.conditionKeys || []).indexOf(c.key) >= 0;
          return '<label class="chip"><input type="checkbox" name="prof-cond" value="' + c.key + '"' + (on ? ' checked' : '') + '>' + K.icon('check', 12) + K.esc(K.label(c)) + '</label>';
        }).join('') + '</div></div>' +
      '<div class="field"><span class="field-label">' + K.esc(K.t('medsLabel')) + '</span>' +
        '<div id="prof-meds">' + rows + '</div>' +
        '<button class="link-app" type="button" id="prof-add-med" style="margin-top:6px">' + K.esc(K.t('addMed')) + '</button></div>';

    var dlg = K.openDialog({
      title: K.t('editProfile'), body: body,
      foot: '<button class="btn-app ghost" type="button" data-dialog-close>' + K.esc(K.t('cancel')) + '</button>' +
        '<button class="btn-app" type="button" id="prof-save">' + K.esc(K.t('save')) + '</button>',
      onMount: function (root) {
        var box = root.querySelector('#prof-meds');
        root.querySelector('#prof-add-med').addEventListener('click', function () {
          var tmp = document.createElement('div');
          tmp.innerHTML = medRow('', '', false);
          box.appendChild(tmp.firstChild);
          var list = box.querySelectorAll('.med-name');
          list[list.length - 1].focus();
        });
        box.addEventListener('click', function (e) {
          var b = e.target.closest('[data-remove-med]');
          if (!b) return;
          if (box.querySelectorAll('.med-input-row').length <= 1) {
            b.closest('.med-input-row').querySelectorAll('input').forEach(function (i) { i.value = ''; });
            return;
          }
          b.closest('.med-input-row').remove();
        });
        root.querySelector('#prof-save').addEventListener('click', function () {
          var err = root.querySelector('#prof-error');
          var code = root.querySelector('#prof-code').value.trim();
          var age = root.querySelector('#prof-age').value;
          var m = collectMeds(box);
          if (!code) { err.textContent = K.t('errCode'); err.classList.add('show'); return; }
          if (!age) { err.textContent = K.t('errAge'); err.classList.add('show'); return; }
          if (m.bad) { err.textContent = K.t('errMed'); err.classList.add('show'); return; }
          var conds = [];
          root.querySelectorAll('input[name="prof-cond"]:checked').forEach(function (c) { conds.push(c.value); });
          K.db.profile = K.db.profile || {};
          K.db.profile.code = code;
          K.db.profile.ageBandKey = age;
          K.db.profile.conditionKeys = conds;
          K.db.profile.medicines = m.meds;
          K.persist();
          K.closeDialog();
          K.render();
          K.toast(K.t('savedToast'));
        });
      }
    });
    return dlg;
  };

  // ---------------------------------------------------------------- print sheet

  function englishConditions(keys) {
    return (keys || []).map(function (k) {
      var c = K.CONDITIONS.filter(function (x) { return x.key === k; })[0];
      return c ? c.en : k;
    }).join(', ') || 'none recorded';
  }
  function englishAge(key) {
    var a = K.AGE_BANDS.filter(function (x) { return x.key === key; })[0];
    return a ? a.en : '—';
  }

  K.buildPrintSheet = function () {
    var host = document.getElementById('print-sheet');
    if (!host) return;
    var p = K.db.profile || {};
    var entries = K.sortedDays();
    if (!entries.length) { host.innerHTML = ''; return; }
    var code = p.code || '—';
    var complete = entries.filter(K.dayComplete).length;
    var windowSize = Math.max(entries.length, 21);
    var completeness = Math.round(complete * 100 / windowSize);
    var medSlots = entries.reduce(function (n, e) { return n + e.meds.length; }, 0);
    var medTaken = entries.reduce(function (n, e) { return n + e.meds.filter(function (m) { return m.status === 'taken'; }).length; }, 0);
    var adherence = medSlots ? Math.round(medTaken * 100 / medSlots) : 0;
    var readings = entries.filter(K.hasReading).length;
    var recent = entries.slice(-16).reverse();

    var h = '';
    h += '<div class="ps-head"><div class="ps-brand">Khai Tracker<span>Clinician summary</span></div>' +
      '<div class="ps-meta">Participant ' + K.esc(code) + '<br>' + K.esc(entries[0].date) + ' to ' + K.esc(entries[entries.length - 1].date) +
      '<br>Generated in the browser demo<br>' + K.esc(new Date().toLocaleString('en-IN')) + '</div></div>';
    h += '<div class="ps-participant">Participant ' + K.esc(code) + '</div>' +
      '<div class="ps-sub">Age band: ' + K.esc(englishAge(p.ageBandKey)) + ' · Conditions: ' + K.esc(englishConditions(p.conditionKeys)) +
      ' · ' + entries.length + ' days recorded</div>';
    h += '<div class="ps-kpis">' +
      '<div class="ps-kpi"><b>' + completeness + '%</b><span>complete days</span></div>' +
      '<div class="ps-kpi"><b>' + adherence + '%</b><span>medicines taken as logged</span></div>' +
      '<div class="ps-kpi"><b>' + readings + '</b><span>days with a measurement</span></div></div>';

    h += '<div class="ps-h">Daily record</div><table class="ps-table"><thead><tr>' +
      '<th>Date</th><th>BP</th><th>Sugar</th><th>Medicines</th><th>Food items</th><th>Entry</th></tr></thead><tbody>';
    recent.forEach(function (e) {
      var bp = e.sys != null && e.dia != null ? e.sys + '/' + e.dia : '—';
      var sugar = e.glucose != null ? K.round(e.glucose) + ' ' + (e.glucoseType === 'fasting' ? 'F' : 'PP') : '—';
      var meds = e.meds.length ? e.meds.filter(function (m) { return m.status === 'taken'; }).length + '/' + e.meds.length + ' taken' : 'not logged';
      var state = K.dayComplete(e) ? 'complete' : (K.hasFood(e) || K.hasReading(e)) ? 'partial' : 'empty';
      h += '<tr><td>' + K.esc(e.date.slice(5)) + '</td><td>' + bp + '</td><td>' + sugar + '</td><td>' +
        meds + '</td><td>' + K.foodCount(e) + '</td><td>' + state + '</td></tr>';
    });
    h += '</tbody></table>';

    h += '<div class="ps-two"><div><div class="ps-h">Points worth discussing</div><ul class="ps-flags">' +
      K.flags(entries).map(function (f) { return '<li>' + K.esc(f) + '</li>'; }).join('') + '</ul></div>' +
      '<div><div class="ps-h">Most frequent foods</div><ul class="ps-foods">' +
      (function () {
        var freq = {};
        entries.forEach(function (e) {
          K.MEALS.forEach(function (slot) {
            (e.meals[slot] || []).forEach(function (f) {
              var name = K.foodLabelEn(f.id, f.label);
              freq[name] = (freq[name] || 0) + 1;
            });
          });
        });
        var top = Object.keys(freq).sort(function (a, b) { return freq[b] - freq[a]; }).slice(0, 8);
        return top.length ? top.map(function (n) { return '<li>' + K.esc(n) + ' ×' + freq[n] + '</li>'; }).join('') : '<li>No foods logged.</li>';
      })() + '</ul></div></div>';

    var notes = entries.filter(function (e) { return (e.note || '').trim(); }).slice(-3).reverse();
    if (notes.length) {
      h += '<div class="ps-h">Participant’s own notes</div>';
      notes.forEach(function (n) { h += '<div class="ps-notes">' + K.esc(n.date.slice(5)) + ': ' + K.esc(n.note) + '</div>'; });
    }
    h += '<div class="ps-foot">Self-reported record. Not a diagnosis, not a prescription. No medication change should be made on this sheet alone. ' +
      'Food values are estimates from household portions, not weighed measurements, and are excluded from the FHIR bundle. ' +
      'Khai Tracker 1.0.0 browser demo · Khai Foods Pvt Ltd, Jamshedpur · product owner: Biswajit Roy Bardhan.</div>';
    host.innerHTML = h;
  };

  K.printSummary = function () {
    if (!K.sortedDays().length) { K.toast(K.t('noDataToast')); return; }
    K.buildPrintSheet();
    setTimeout(function () {
      try { window.print(); } catch (e) { K.toast(K.t('printHint')); }
    }, 60);
  };

  K.mountView = function () {
    if (!K.db.profile) K.mountOnboarding();
  };
})();
