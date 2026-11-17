/* Khai Tracker — browser demo: small UI toolkit (icons, toast, dialog, ring). */
(function () {
  'use strict';
  var K = window.Khai = window.Khai || {};

  var ICONS = {
    today: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2.4" fill="currentColor" stroke="none"/>',
    history: '<rect x="3.5" y="4.5" width="17" height="16" rx="1.5"/><path d="M3.5 9h17M8 3v3m8-3v3"/><path d="M7.5 13h3m3 0h3M7.5 16.5h3"/>',
    progress: '<path d="M4 19V5m0 14h16"/><path d="m7 15 4-4 3 2.5L20 7"/>',
    settings: '<path d="M4 7h9m3 0h4M4 17h4m3 0h9"/><circle cx="15.5" cy="7" r="2"/><circle cx="9.5" cy="17" r="2"/>',
    left: '<path d="M14.5 5.5 8 12l6.5 6.5"/>',
    right: '<path d="M9.5 5.5 16 12l-6.5 6.5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/>',
    download: '<path d="M12 4v11m0 0 4-4m-4 4-4-4M5 20h14"/>',
    printer: '<path d="M7 9V4h10v5M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><rect x="7" y="14" width="10" height="7" rx="1"/>',
    lock: '<rect x="5" y="11" width="14" height="9" rx="1.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    warn: '<path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/>',
    trash: '<path d="M4 7h16M9 7V4h6v3m-9 0 1 14h10l1-14M10 11v6m4-6v6"/>',
    flask: '<path d="M9 3h6M10 3v6.2L4.8 18a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 9.2V3"/><path d="M7.5 15h9"/>'
  };

  K.icon = function (name, size) {
    var body = ICONS[name] || ICONS.today;
    return '<svg viewBox="0 0 24 24" width="' + (size || 18) + '" height="' + (size || 18) +
      '" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      body + '</svg>';
  };

  K.ring = function (done, total, label) {
    var C = 2 * Math.PI * 18;
    var pct = total ? done / total : 0;
    var off = C * (1 - pct);
    return '<svg class="ring-sm" viewBox="0 0 46 46" role="img" aria-label="' + K.attr(label) + '">' +
      '<circle class="track" cx="23" cy="23" r="18" fill="none" stroke-width="2.5"/>' +
      '<circle class="value" cx="23" cy="23" r="18" fill="none" stroke-width="2.5" stroke-linecap="round" ' +
      'stroke-dasharray="' + C.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '" transform="rotate(-90 23 23)"/>' +
      '<text x="23" y="26.5">' + done + '/' + total + '</text></svg>';
  };

  K.daySteps = function (e) {
    var prescribed = !!(K.db.profile && K.db.profile.medicines && K.db.profile.medicines.length);
    var total = prescribed ? 3 : 2;
    var done = (K.hasFood(e) ? 1 : 0) + (K.hasReading(e) ? 1 : 0) + (prescribed && K.hasMeds(e) ? 1 : 0);
    return { done: done, total: total };
  };

  // ---------------------------------------------------------------- toast

  var toastEl = null, toastTimer = 0;
  K.toast = function (msg) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'toast';
      toastEl.setAttribute('role', 'status');
      toastEl.setAttribute('aria-live', 'polite');
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, 2600);
  };

  // ---------------------------------------------------------------- dialog

  var openDialog = null;
  var lastFocus = null;

  K.dialogOpen = function () { return !!openDialog; };

  K.openDialog = function (opts) {
    K.closeDialog();
    lastFocus = document.activeElement;
    var back = document.createElement('div');
    back.className = 'dialog-backdrop';
    back.setAttribute('data-dialog-backdrop', '');
    back.innerHTML =
      '<div class="dialog" role="dialog" aria-modal="true" aria-labelledby="dlg-title">' +
        '<div class="dialog-head">' +
          '<div style="flex:1;min-width:0">' +
            (opts.kicker ? '<div class="app-kicker">' + K.esc(opts.kicker) + '</div>' : '') +
            '<h2 id="dlg-title">' + K.esc(opts.title || '') + '</h2>' +
          '</div>' +
          '<button class="dialog-close" type="button" data-dialog-close aria-label="' + K.attr(K.t('close')) + '">' + K.icon('x', 14) + '</button>' +
        '</div>' +
        '<div class="dialog-body">' + (opts.body || '') + '</div>' +
        (opts.foot ? '<div class="dialog-foot">' + opts.foot + '</div>' : '') +
      '</div>';
    document.body.appendChild(back);
    openDialog = back;
    document.body.style.overflow = 'hidden';

    back.addEventListener('click', function (e) {
      if (e.target === back) K.closeDialog();
    });
    back.querySelectorAll('[data-dialog-close]').forEach(function (b) {
      b.addEventListener('click', function () { K.closeDialog(); });
    });
    if (opts.onMount) opts.onMount(back);
    var focusTarget = back.querySelector('[autofocus], input:not([type=hidden]), select, textarea, button');
    if (focusTarget) setTimeout(function () { try { focusTarget.focus(); } catch (e) {} }, 30);
    return back;
  };

  K.closeDialog = function () {
    if (!openDialog) return;
    openDialog.remove();
    openDialog = null;
    document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) { try { lastFocus.focus(); } catch (e) {} }
    lastFocus = null;
  };

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && openDialog) { K.closeDialog(); return; }
    if (e.key !== 'Tab' || !openDialog) return;
    var focusables = openDialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (!focusables.length) return;
    var first = focusables[0], last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  // ---------------------------------------------------------------- misc

  K.segmented = function (name, options, current, action, cls) {
    return '<div class="seg" role="group"' + (name ? ' aria-label="' + K.attr(name) + '"' : '') + '>' +
      options.map(function (o) {
        return '<button type="button" data-act="' + action + '" data-value="' + K.attr(o.value) + '"' +
          (cls && o.cls ? ' class="' + o.cls + '"' : '') +
          ' aria-pressed="' + (o.value === current ? 'true' : 'false') + '">' + K.esc(o.label) + '</button>';
      }).join('') + '</div>';
  };

  K.scale = function (field, current) {
    var out = '<div class="scale-row" role="group" aria-label="' + K.attr(field) + '">';
    for (var i = 1; i <= 5; i++) {
      out += '<button type="button" data-act="scale" data-field="' + field + '" data-value="' + i + '" aria-pressed="' + (current === i ? 'true' : 'false') + '">' + i + '</button>';
    }
    return out + '</div>';
  };

  K.foodItemsLabel = function (n) {
    return n === 1 ? K.t('foodItemsOne') : K.t('foodItemsN', { n: n });
  };
})();
