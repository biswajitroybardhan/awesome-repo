/* Khai site — embedded localisation runtime.
 *
 * No network, no build step. Translations are embedded in translations.js.
 * The browser demo keeps its own K.t; here we make K.t delegate to this runtime
 * so both the static pages and the demo use the same active language.
 */
(function () {
  'use strict';

  var DATA = window.KHAI_I18N_DATA;
  if (!DATA || !DATA.strings) return;

  var STORAGE_KEY = 'khai.lang';
  var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, CODE: 1, PRE: 1, TEXTAREA: 1, SVG: 1 };

  function normalize(value) {
    var code = String(value || '').toLowerCase().replace(/_/g, '-').split('-')[0];
    return DATA.strings[code] ? code : 'en';
  }

  function queryLang() {
    try {
      var m = /[?&]lang=([^&]+)/.exec(window.location.search);
      return m ? normalize(decodeURIComponent(m[1])) : null;
    } catch (e) { return null; }
  }

  function storedLang() {
    try { return normalize(window.localStorage.getItem(STORAGE_KEY)); } catch (e) { return 'en'; }
  }

  var initial = queryLang() || storedLang();
  if (initial === 'en' && !queryLang()) {
    try {
      var nav = (navigator.language || '').split('-')[0].toLowerCase();
      if (DATA.strings[nav]) initial = nav;
    } catch (e) { /* keep English */ }
  }

  var I = {
    code: initial,
    languages: DATA.languages,
    requested: queryLang,
    isDraft: function (code) {
      var found = DATA.languages.filter(function (l) { return l.code === (code || I.code); })[0];
      return !!found && found.status === 'draft';
    },
    nativeName: function (code) {
      var found = DATA.languages.filter(function (l) { return l.code === normalize(code); })[0];
      return found ? found.native : 'English';
    },
    has: function (key) {
      return Object.prototype.hasOwnProperty.call(DATA.strings[I.code] || {}, key);
    },
    t: function (key, vars) {
      var dict = DATA.strings[I.code] || DATA.strings.en;
      var value = dict[key];
      if (value == null) value = DATA.strings.en[key];
      var out = value == null ? key : String(value);
      if (vars) Object.keys(vars).forEach(function (name) {
        out = out.replace(new RegExp('\\{' + name + '\\}', 'g'), String(vars[name]));
      });
      return out;
    }
  };

  var english = DATA.strings.en;
  var byText = Object.create(null);
  Object.keys(english).forEach(function (key) {
    var value = english[key];
    if (typeof value !== 'string' || !value.trim()) return;
    var norm = value.trim().replace(/\s+/g, ' ');
    if (!byText[norm]) byText[norm] = key;
  });

  // Remember which English key each node came from. Translating the current
  // text back to English only worked for the first switch; keeping the source
  // key makes en -> hi -> ar -> en deterministic.
  var textSources = new WeakMap();
  var attrSources = new WeakMap();

  function normalizeText(value) {
    return String(value || '').trim().replace(/\s+/g, ' ');
  }

  function keyFor(value) {
    return byText[normalizeText(value)] || null;
  }

  function skipElement(el) {
    while (el && el !== document.body) {
      if (el.nodeType !== 1) return true;
      if (SKIP_TAGS[el.tagName]) return true;
      if (el.id === 'app-host' || el.id === 'print-sheet' || el.hasAttribute('data-no-i18n')) return true;
      if (el.getAttribute && el.getAttribute('aria-hidden') === 'true') return true;
      el = el.parentElement;
    }
    return false;
  }

  function translated(value) {
    var key = keyFor(value);
    return key ? I.t(key) : null;
  }

  function translateTextNodes() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    var node;
    while ((node = walker.nextNode())) {
      if (!node.nodeValue || !node.nodeValue.trim()) continue;
      if (skipElement(node.parentElement)) continue;
      var raw = node.nodeValue;
      var entry = textSources.get(node);
      if (!entry) {
        var key = keyFor(raw);
        if (!key) continue;
        entry = { raw: raw, key: key };
        textSources.set(node, entry);
      }
      var value = I.t(entry.key);
      var lead = (entry.raw.match(/^\s*/) || [''])[0];
      var tail = (entry.raw.match(/\s*$/) || [''])[0];
      node.nodeValue = lead + value + tail;
    }
  }

  function translateAttributes() {
    var nodes = document.body.querySelectorAll('*');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (skipElement(el)) continue;
      var stored = attrSources.get(el);
      if (!stored) {
        stored = Object.create(null);
        attrSources.set(el, stored);
      }
      ['aria-label', 'title', 'placeholder', 'alt'].forEach(function (name) {
        if (!el.hasAttribute(name)) return;
        var key = stored[name];
        if (!key) {
          key = keyFor(el.getAttribute(name));
          if (!key) return;
          stored[name] = key;
        }
        el.setAttribute(name, I.t(key));
      });
    }
  }

  function titleKey() {
    var page = (window.location.pathname.split('/').pop() || 'index.html')
      .toLowerCase().replace(/\.html$/, '');
    if (page === '' || page === 'index') return 'title_index';
    if (page === 'demo') return 'title_demo';
    if (page === 'blueprint') return 'title_blueprint';
    if (page === 'functions') return 'title_functions';
    if (page === 'hospital') return 'title_hospital';
    if (page === 'security') return 'title_security';
    if (page === 'privacy') return 'title_privacy';
    if (page === '404') return 'title_404';
    if (page === 'assistant') return 'assistantTitle';
    return null;
  }

  function ensureSwitcher() {
    var actions = document.querySelector('.header-actions');
    if (!actions || document.getElementById('i18n-lang-select')) return;
    var wrap = document.createElement('div');
    wrap.className = 'i18n-lang';
    var select = document.createElement('select');
    select.id = 'i18n-lang-select';
    select.setAttribute('aria-label', I.t('language'));
    DATA.languages.forEach(function (lang) {
      var opt = document.createElement('option');
      opt.value = lang.code;
      opt.textContent = lang.native + (lang.status === 'draft' ? ' · ' + I.t('draft_notice').split(' — ')[0] : '');
      if (lang.code === I.code) opt.selected = true;
      select.appendChild(opt);
    });
    select.addEventListener('change', function () {
      var code = normalize(select.value);
      if (window.Khai && typeof window.Khai.setLang === 'function') window.Khai.setLang(code);
      else I.set(code);
    });
    wrap.appendChild(select);
    var theme = actions.querySelector('[data-theme-toggle]');
    if (theme) actions.insertBefore(wrap, theme);
    else actions.appendChild(wrap);
  }

  function ensureNotice() {
    var existing = document.getElementById('i18n-draft-notice');
    if (!I.isDraft()) {
      if (existing) existing.remove();
      return;
    }
    if (!existing) {
      existing = document.createElement('div');
      existing.id = 'i18n-draft-notice';
      existing.className = 'i18n-draft-notice';
      existing.setAttribute('role', 'note');
      document.body.insertBefore(existing, document.body.firstChild);
    }
    existing.textContent = I.t('draft_notice');
  }

  function apply() {
    document.documentElement.lang = I.code;
    var lang = DATA.languages.filter(function (l) { return l.code === I.code; })[0];
    if (lang && lang.rtl) document.documentElement.setAttribute('dir', 'rtl');
    else document.documentElement.removeAttribute('dir');

    var key = titleKey();
    if (key) document.title = I.t(key);
    translateTextNodes();
    translateAttributes();
    ensureSwitcher();
    ensureNotice();
    var select = document.getElementById('i18n-lang-select');
    if (select) {
      select.setAttribute('aria-label', I.t('language'));
      var draftTag = ' · ' + I.t('draft_notice').split(' — ')[0];
      DATA.languages.forEach(function (lang, index) {
        var option = select.options[index];
        if (option) option.textContent = lang.native + (lang.status === 'draft' ? draftTag : '');
      });
      select.value = I.code;
    }
    window.dispatchEvent(new CustomEvent('khai:languagechange', { detail: { lang: I.code } }));
  }

  I.set = function (next, opts) {
    I.code = normalize(next);
    if (!opts || opts.persist !== false) {
      try { window.localStorage.setItem(STORAGE_KEY, I.code); } catch (e) { /* private mode */ }
    }
    apply();
    return I.code;
  };

  window.KhaiI18n = I;

  // The demo's language picker opens a full language dialog instead of the
  // old two-language toggle. It reuses the demo's accessible dialog helper.
  window.KhaiOpenLanguageDialog = function () {
    var K = window.Khai;
    if (!K || !K.openDialog) { I.set(I.code === 'hi' ? 'en' : 'hi'); return; }
    var options = DATA.languages.map(function (lang) {
      return '<option value="' + lang.code + '"' + (lang.code === I.code ? ' selected' : '') + '>' +
        K.esc(lang.native) + (lang.status === 'draft' ? ' · draft' : '') + '</option>';
    }).join('');
    var body = '<p style="font-size:.875rem;color:var(--ink-2);line-height:1.6">' +
      K.esc(I.t('draft_notice')) + '</p>' +
      '<select id="i18n-language-select" style="width:100%;margin-top:10px">' + options + '</select>' +
      (I.isDraft() ? '<p class="hint" style="margin-top:10px">' + K.esc(I.t('draft_notice')) + '</p>' : '');
    var root = K.openDialog({
      title: I.t('language'),
      body: body,
      foot: '<button class="btn-app ghost" type="button" data-dialog-close>' + K.esc(K.t('cancel')) + '</button>' +
        '<button class="btn-app" type="button" id="i18n-language-apply">' + K.esc(K.t('confirm')) + '</button>'
    });
    root.querySelector('#i18n-language-apply').addEventListener('click', function () {
      var code = normalize(root.querySelector('#i18n-language-select').value);
      K.closeDialog();
      K.setLang(code);
    });
  };

  apply();
})();
