/* Khai Tracker — browser demo: the Today screen and the food picker. */
(function () {
  'use strict';
  var K = window.Khai = window.Khai || {};

  K.editDay = function (date) {
    var d = K.day(date, false);
    if (!d) { d = K.blankDay(date); K.db.days[date] = d; }
    return d;
  };

  K.viewToday = function () {
    var date = K.state.date;
    var saved = K.day(date, false);
    var e = saved || K.blankDay(date);
    var steps = K.daySteps(e);
    var complete = K.dayComplete(e);
    var prescribed = !!(K.db.profile && K.db.profile.medicines && K.db.profile.medicines.length);
    var totals = K.totals(e);
    var isToday = date === K.todayISO();
    var tomorrow = K.shift(date, 1) > K.todayISO();

    var html = '';
    html += '<div class="day-bar">' +
      '<button class="arrow" type="button" data-act="prev-day" aria-label="' + K.attr(K.t('prevDay')) + '">' + K.icon('left', 15) + '</button>' +
      '<div class="day-bar-label"><b>' + K.esc(K.relativeDay(date)) + '</b><span>' + K.esc(K.longDate(date)) + '</span></div>' +
      '<button class="arrow" type="button" data-act="next-day" aria-label="' + K.attr(K.t('nextDay')) + '"' + (tomorrow ? ' disabled' : '') + '>' + K.icon('right', 15) + '</button>' +
      '<button class="today-btn" type="button" data-act="jump-today"' + (isToday ? ' disabled' : '') + '>' + K.esc(K.t('todayBtn')) + '</button>' +
    '</div>';

    html += '<div class="app-view">';
    html += '<div class="today-head" style="padding:0 0 4px">' +
      '<div class="today-title-row"><h2>' + K.esc(isToday ? K.t('today') : K.prettyDate(date)) + '</h2>' +
      '<span id="ring-slot">' + K.ring(steps.done, steps.total, complete ? K.t('dayComplete') : K.t('dayPartial')) + '</span></div>' +
      '<div class="status-line" id="status-line">' + statusDots(e) + '</div>' +
    '</div>';

    // ---- food
    html += '<section class="app-section">' +
      '<h3><span>' + K.esc(K.t('foodLogged')) + '</span><span class="count" id="food-count">' + K.esc(K.foodItemsLabel(totals.items)) + '</span></h3>';
    K.MEALS.forEach(function (slot) {
      var list = e.meals[slot] || [];
      html += '<div class="meal">' +
        '<div class="meal-top"><b>' + K.esc(K.t('meal' + slot.charAt(0).toUpperCase() + slot.slice(1))) + '</b>' +
        '<span>' + (list.length ? list.reduce(function (n, f) { return n + (f.carb || 0); }, 0).toFixed(0) + ' g ' + K.esc(K.t('carbs')) : '') + '</span></div>';
      if (!list.length) {
        html += '<p class="meal-empty">' + K.esc(K.t('noFood')) + '</p>';
      } else {
        html += '<ul class="meal-items">';
        list.forEach(function (f, idx) {
          html += '<li class="meal-item">' +
            '<span class="name"><b>' + K.esc(K.foodLabel(f.id, f.label)) + '</b><span>' + K.esc(K.num(f.carb)) + ' g ' + K.esc(K.t('carbs')) + ' · ' + K.esc(K.num(f.kcal)) + ' ' + K.esc(K.t('kcal')) + '</span></span>' +
            '<span class="qty">' + K.esc(K.num(f.qty)) + ' ' + K.esc(f.unit || '') + '</span>' +
            '<button class="remove-x" type="button" data-act="remove-food" data-slot="' + slot + '" data-idx="' + idx + '" aria-label="' + K.attr(K.t('remove')) + ' ' + K.attr(K.foodLabel(f.id, f.label)) + '">' + K.icon('x', 13) + '</button>' +
          '</li>';
        });
        html += '</ul>';
      }
      html += '<button class="meal-add" type="button" data-act="add-food" data-slot="' + slot + '">' + K.icon('plus', 12) + ' ' + K.esc(K.t('addFood')) + '</button>';
      html += '</div>';
    });
    html += '<div class="estimate-row"><span>' + K.esc(K.t('estTotal')) + '</span>' +
      '<span><b id="est-kcal">' + K.esc(String(K.round(totals.kcal))) + '</b> ' + K.esc(K.t('kcal')) +
      ' · <b id="est-carb">' + K.esc(String(K.round(totals.carb))) + '</b> g ' + K.esc(K.t('carbs')) + '</span></div>' +
      '<p class="hint">' + K.esc(K.t('estimateNote')) + '</p>' +
    '</section>';

    // ---- medicines
    html += '<section class="app-section">' +
      '<h3><span>' + K.esc(K.t('medsTitle')) + '</span><span class="count">' + K.esc(K.t('medsHint')) + '</span></h3>';
    var profileMeds = (K.db.profile && K.db.profile.medicines) || [];
    if (!profileMeds.length) {
      html += '<p class="hint">' + K.esc(K.t('noMeds')) + '</p>' +
        '<button class="btn-app ghost small" style="margin-top:10px" type="button" data-act="edit-profile">' + K.esc(K.t('addMeds')) + '</button>';
    } else {
      profileMeds.forEach(function (m) {
        var cur = e.meds.filter(function (x) { return x.name === m.name; })[0];
        var status = cur ? cur.status : '';
        html += '<div class="med-row"><div class="med-name">' + K.esc(m.name) +
          (m.dose ? '<span>' + K.esc(m.dose) + '</span>' : '') + '</div>' +
          '<div class="seg" role="group" aria-label="' + K.attr(m.name) + '">' +
            '<button type="button" data-act="med" data-name="' + K.attr(m.name) + '" data-dose="' + K.attr(m.dose || '') + '" data-status="taken" aria-pressed="' + (status === 'taken' ? 'true' : 'false') + '">' + K.esc(K.t('taken')) + '</button>' +
            '<button type="button" class="skip" data-act="med" data-name="' + K.attr(m.name) + '" data-dose="' + K.attr(m.dose || '') + '" data-status="skipped" aria-pressed="' + (status === 'skipped' ? 'true' : 'false') + '">' + K.esc(K.t('skipped')) + '</button>' +
            '<button type="button" data-act="med" data-name="' + K.attr(m.name) + '" data-dose="' + K.attr(m.dose || '') + '" data-status="changed" aria-pressed="' + (status === 'changed' ? 'true' : 'false') + '">' + K.esc(K.t('changed')) + '</button>' +
          '</div></div>';
      });
    }
    html += '</section>';

    // ---- readings
    html += '<section class="app-section">' +
      '<h3><span>' + K.esc(K.t('vitalsTitle')) + '</span></h3>' +
      '<p class="hint" style="margin-top:0;margin-bottom:10px">' + K.esc(K.t('vitalsHint')) + '</p>' +
      '<div class="vitals-grid">' +
        vital('sys', K.t('bpSys'), e.sys, K.t('bpUnit'), 'numeric') +
        vital('dia', K.t('bpDia'), e.dia, K.t('bpUnit'), 'numeric') +
        vital('pulse', K.t('pulse'), e.pulse, 'bpm', 'numeric') +
        vital('weight', K.t('weight'), e.weight, K.t('weightUnit'), 'decimal') +
        '<div class="vital wide"><label for="v-glucose">' + K.esc(K.t('glucose')) + '</label>' +
          '<div class="input-wrap"><input id="v-glucose" data-field="glucose" data-kind="decimal" type="number" inputmode="decimal" step="1" min="20" max="700" placeholder="—" value="' + K.attr(e.glucose == null ? '' : K.num(e.glucose)) + '"><span class="unit">' + K.esc(K.t('glucoseUnit')) + '</span></div>' +
          '<div class="context" role="group" aria-label="' + K.attr(K.t('glucose')) + '">' +
            '<button type="button" data-act="glucose-type" data-value="fasting" aria-pressed="' + (e.glucoseType === 'fasting' ? 'true' : 'false') + '">' + K.esc(K.t('fasting')) + '</button>' +
            '<button type="button" data-act="glucose-type" data-value="pp" aria-pressed="' + (e.glucoseType === 'pp' ? 'true' : 'false') + '">' + K.esc(K.t('afterFood')) + '</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';

    // ---- wellbeing
    html += '<section class="app-section">' +
      '<h3><span>' + K.esc(K.t('wellbeingTitle')) + '</span></h3>' +
      '<div class="field" style="margin-bottom:10px"><span class="field-label">' + K.esc(K.t('energy')) + '</span>' + K.scale('energy', e.energy) + '</div>' +
      '<div class="field" style="margin-bottom:10px"><span class="field-label">' + K.esc(K.t('mood')) + '</span>' + K.scale('mood', e.mood) + '</div>' +
      '<div class="field" style="margin-bottom:10px"><label for="v-sleep">' + K.esc(K.t('sleep')) + '</label>' +
        '<input id="v-sleep" data-field="sleep" data-kind="decimal" type="number" inputmode="decimal" step="0.5" min="0" max="24" placeholder="—" value="' + K.attr(e.sleep == null ? '' : K.num(e.sleep)) + '"></div>' +
      '<div class="field" style="margin-bottom:0"><label for="v-note">' + K.esc(K.t('note')) + '</label>' +
        '<textarea id="v-note" data-field="note" maxlength="500" placeholder="' + K.attr(K.t('notePh')) + '">' + K.esc(e.note || '') + '</textarea>' +
        '<div class="hint" style="display:flex;justify-content:space-between"><span>' + K.esc(K.t('autoSave')) + '</span><span id="note-count">' + (e.note || '').length + '/500</span></div></div>' +
    '</section>';

    html += '<div class="save-bar">' +
      '<div class="state" id="save-state"><b>' + K.esc(K.t('savedState')) + '</b>' + (!K.storageOk ? K.esc(K.t('saveFailed')) : '') + '</div>' +
      '<button class="btn-app" type="button" data-act="save-day">' + K.esc(K.t('saveToday')) + '</button>' +
    '</div>';

    html += '</div>';
    return html;
  };

  function statusDots(e) {
    var prescribed = !!(K.db.profile && K.db.profile.medicines && K.db.profile.medicines.length);
    var out = '<span class="status-dot' + (K.hasFood(e) ? ' on' : '') + '">' + K.esc(K.t('foodLogged')) + '</span>' +
      '<span class="status-dot' + (K.hasReading(e) ? ' on' : '') + '">' + K.esc(K.t('readingLogged')) + '</span>';
    if (prescribed) out += '<span class="status-dot' + (K.hasMeds(e) ? ' on' : '') + '">' + K.esc(K.t('medsLogged')) + '</span>';
    return out;
  }

  function vital(field, label, value, unit, kind) {
    return '<div class="vital"><label for="v-' + field + '">' + K.esc(label) + '</label>' +
      '<div class="input-wrap"><input id="v-' + field + '" data-field="' + field + '" data-kind="' + kind + '" type="number" inputmode="' + (kind === 'numeric' ? 'numeric' : 'decimal') + '" step="' + (kind === 'numeric' ? '1' : '0.1') + '" placeholder="—" value="' + K.attr(value == null ? '' : K.num(value)) + '"><span class="unit">' + K.esc(unit) + '</span></div></div>';
  }

  // ---------------------------------------------------------------- live updates

  K.refreshTodayChrome = function () {
    if (K.state.tab !== 'today') return;
    var e = K.day(K.state.date, false) || K.blankDay(K.state.date);
    var steps = K.daySteps(e);
    var ringSlot = document.getElementById('ring-slot');
    if (ringSlot) ringSlot.innerHTML = K.ring(steps.done, steps.total, K.dayComplete(e) ? K.t('dayComplete') : K.t('dayPartial'));
    var line = document.getElementById('status-line');
    if (line) line.innerHTML = statusDots(e);
    var kcal = document.getElementById('est-kcal'), carb = document.getElementById('est-carb');
    if (kcal || carb) {
      var t = K.totals(e);
      if (kcal) kcal.textContent = String(K.round(t.kcal));
      if (carb) carb.textContent = String(K.round(t.carb));
    }
    var count = document.getElementById('food-count');
    if (count) count.textContent = K.foodItemsLabel(K.foodCount(e));
    var state = document.getElementById('save-state');
    if (state) state.innerHTML = '<b>' + K.esc(K.t('savedState')) + '</b>' + (!K.storageOk ? K.esc(K.t('saveFailed')) : '');
  };

  // ---------------------------------------------------------------- food picker

  K.openFoodPicker = function (slot) {
    var state = { slot: slot, query: '', filter: slot, picked: null, qty: 1 };

    function listHtml() {
      var list = K.searchFood(state.query, state.filter === 'all' ? null : state.filter);
      if (!list.length) return '<div class="food-empty">' + K.esc(K.t('noMatches')) + '</div>';
      return '<div class="food-list">' + list.map(function (f) {
        var name = K.lang === 'hi' ? (f.hi || f.en) : f.en;
        var alt = K.lang === 'hi' ? f.en : (f.hi || '');
        return '<button class="food-option" type="button" data-food="' + K.attr(f.id) + '">' +
          '<span><b>' + K.esc(name) + '</b><span>' + K.esc(alt ? alt + ' · ' + f.region : f.region) + '</span></span>' +
          '<span class="kcal">' + K.esc(String(K.round((f.kcal[0] + f.kcal[1]) / 2))) + ' ' + K.esc(K.t('kcal')) + '<br>' + K.esc(f.unit) + '</span>' +
        '</button>';
      }).join('') + '</div>';
    }

    function bodyHtml() {
      if (state.picked) {
        var f = K.BY_ID[state.picked];
        var item = K.makeFoodItem(f, state.qty);
        var name = K.lang === 'hi' ? (f.hi || f.en) : f.en;
        return '<div class="picked">' +
          '<div class="picked-name">' + K.esc(name) + '</div>' +
          '<div class="picked-meta">' + K.esc(f.portion) + ' · ' + K.esc(f.region) + '</div>' +
          '<div class="qty-line">' +
            '<button class="step" type="button" data-qty="-1" aria-label="−">−</button>' +
            '<input id="pick-qty" type="number" inputmode="decimal" min="0.25" max="20" step="0.5" value="' + K.attr(K.num(state.qty)) + '">' +
            '<span class="unit">' + K.esc(f.unit) + '</span>' +
            '<button class="step" type="button" data-qty="1" aria-label="+">+</button>' +
          '</div>' +
          '<div class="nutri">' +
            '<div><b>' + K.esc(String(K.round(item.kcal))) + '</b><span>' + K.esc(K.t('kcal')) + '</span></div>' +
            '<div><b>' + K.esc(String(K.round(item.carb))) + '</b><span>g ' + K.esc(K.t('carbs')) + '</span></div>' +
            '<div><b>' + K.esc(String(K.round(item.protein))) + '</b><span>g ' + K.esc(K.t('protein')) + '</span></div>' +
            '<div><b>' + K.esc(String(K.round(item.fat))) + '</b><span>g ' + K.esc(K.t('fat')) + '</span></div>' +
          '</div>' +
          '<p class="hint">' + K.esc(K.t('estimateNote')) + '</p>' +
        '</div>';
      }
      return '<div class="search-line">' + K.icon('search', 15) +
        '<input id="food-search" type="search" autocomplete="off" placeholder="' + K.attr(K.t('searchPh')) + '" value="' + K.attr(state.query) + '"></div>' +
        '<div class="food-filter">' + filterBtn('all', K.t('allFoods')) + K.MEALS.map(function (m) {
          return filterBtn(m, K.t('meal' + m.charAt(0).toUpperCase() + m.slice(1)));
        }).join('') + '</div>' +
        listHtml() +
        '<p class="hint" style="margin-top:10px">' + K.esc(K.t('libraryNote')) + '</p>';
    }

    function filterBtn(value, label) {
      return '<button type="button" data-filter="' + value + '" aria-pressed="' + (state.filter === value ? 'true' : 'false') + '">' + K.esc(label) + '</button>';
    }

    function footHtml() {
      if (!state.picked) return '<button class="btn-app ghost" type="button" data-dialog-close>' + K.esc(K.t('cancel')) + '</button>';
      var meal = K.t('meal' + state.slot.charAt(0).toUpperCase() + state.slot.slice(1));
      return '<button class="btn-app ghost" type="button" data-back-list>' + K.esc(K.t('back')) + '</button>' +
        '<button class="btn-app" type="button" data-add-picked>' + K.esc(K.t('addToMeal', { meal: meal })) + '</button>';
    }

    var mealLabel = K.t('meal' + slot.charAt(0).toUpperCase() + slot.slice(1));
    var dlg = K.openDialog({
      kicker: mealLabel,
      title: K.t('foodPickerTitle'),
      body: bodyHtml(),
      foot: footHtml(),
      onMount: function (root) { bind(root); }
    });

    function refresh() {
      dlg.querySelector('.dialog-body').innerHTML = bodyHtml();
      var foot = dlg.querySelector('.dialog-foot');
      if (foot) foot.innerHTML = footHtml();
      bind(dlg);
      if (!state.picked) {
        var s = dlg.querySelector('#food-search');
        if (s) { s.value = state.query; s.focus(); }
      }
    }

    function bind(root) {
      var search = root.querySelector('#food-search');
      if (search) {
        search.addEventListener('input', function () {
          state.query = search.value;
          var list = root.querySelector('.food-list');
          var host = list ? list.parentNode : null;
          if (host) {
            var tmp = document.createElement('div');
            tmp.innerHTML = listHtml();
            if (list) list.replaceWith(tmp.firstChild);
            else host.appendChild(tmp.firstChild);
            bindList(root);
          } else {
            refresh();
          }
        });
        search.addEventListener('keydown', function (ev) {
          if (ev.key === 'Enter') {
            var first = root.querySelector('[data-food]');
            if (first) first.click();
          }
        });
      }
      bindList(root);
      root.querySelectorAll('[data-filter]').forEach(function (b) {
        b.addEventListener('click', function () {
          state.filter = b.getAttribute('data-filter');
          refresh();
        });
      });
      var back = root.querySelector('[data-back-list]');
      if (back) back.addEventListener('click', function () {
        state.picked = null;
        refresh();
      });
      var qtyInput = root.querySelector('#pick-qty');
      if (qtyInput) {
        qtyInput.addEventListener('input', function () {
          var v = Number(qtyInput.value);
          state.qty = isFinite(v) && v > 0 ? Math.min(20, v) : 1;
        });
        qtyInput.addEventListener('change', function () {
          qtyInput.value = K.num(state.qty);
          var picked = root.querySelector('.picked');
          if (picked) {
            var tmp = document.createElement('div');
            tmp.innerHTML = bodyHtml();
            picked.replaceWith(tmp.querySelector('.picked'));
          }
        });
      }
      root.querySelectorAll('[data-qty]').forEach(function (b) {
        b.addEventListener('click', function () {
          var delta = Number(b.getAttribute('data-qty'));
          state.qty = Math.max(0.25, Math.min(20, Math.round((state.qty + delta) * 2) / 2));
          refresh();
        });
      });
      var add = root.querySelector('[data-add-picked]');
      if (add) add.addEventListener('click', function () { commit(); });
    }

    function bindList(root) {
      root.querySelectorAll('[data-food]').forEach(function (b) {
        b.addEventListener('click', function () {
          state.picked = b.getAttribute('data-food');
          state.qty = 1;
          refresh();
        });
      });
    }

    function commit() {
      var f = K.BY_ID[state.picked];
      if (!f) return;
      var e = K.editDay(K.state.date);
      e.meals[state.slot].push(K.makeFoodItem(f, state.qty));
      K.touch(e);
      K.closeDialog();
      K.render();
      K.toast(K.t('addedToast'));
    }
  };
})();
