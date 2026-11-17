/* Khai site — small, dependency-free behaviour for the marketing pages.
   The demo has its own script. Nothing here talks to a network. */
(function () {
  'use strict';

  var root = document.documentElement;
  var THEME_KEY = 'khai.theme';
  var media = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function stored() {
    try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
  }

  function systemTheme() {
    return media && media.matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#121310' : '#f5f1e8');
    var btn = document.querySelector('[data-theme-toggle]');
    if (btn) {
      var dark = theme === 'dark';
      btn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
      btn.setAttribute('title', dark ? 'Light theme' : 'Dark theme');
      btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
    }
  }

  applyTheme(stored() === 'dark' || stored() === 'light' ? stored() : systemTheme());

  document.addEventListener('click', function (e) {
    var toggle = e.target.closest('[data-theme-toggle]');
    if (toggle) {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(THEME_KEY, next); } catch (err) { /* private mode */ }
      applyTheme(next);
      return;
    }

    var copy = e.target.closest('[data-copy]');
    if (copy) {
      var sel = copy.getAttribute('data-copy');
      var node = sel && document.querySelector(sel);
      var text = node ? (node.textContent || '').trim() : copy.getAttribute('data-copy-text') || '';
      if (!text) return;
      var done = function () {
        var old = copy.textContent;
        copy.textContent = 'Copied';
        copy.setAttribute('aria-live', 'polite');
        setTimeout(function () { copy.textContent = old; }, 1800);
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text, done); });
      } else {
        fallbackCopy(text, done);
      }
    }
  });

  function fallbackCopy(text, done) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); done(); } catch (e) { /* nothing sensible to do */ }
    document.body.removeChild(ta);
  }

  // Mobile navigation
  var menuBtn = document.querySelector('[data-menu]');
  var nav = document.querySelector('.site-nav');
  if (menuBtn && nav) {
    var closeMenu = function () {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    };
    menuBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !menuBtn.contains(e.target)) closeMenu();
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 860) closeMenu();
    });
  }

  // Current nav item
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a[href]').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === here || (here === '' && href === 'index.html')) {
      a.setAttribute('aria-current', 'page');
    }
  });

  // Footer year
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  // Keep an explicit theme if the OS changes while the page is open and the user
  // has not chosen one.
  if (media && media.addEventListener) {
    media.addEventListener('change', function () {
      var s = stored();
      if (s !== 'dark' && s !== 'light') applyTheme(systemTheme());
    });
  }
})();
