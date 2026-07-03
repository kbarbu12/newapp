/* PWA glue: registers the service worker and shows an install / "Add to Home
   Screen" prompt. Fully self-contained so it needs no CSS version bumps. */
(function () {
  'use strict';

  // ── 1. Register the service worker ───────────────────────────────
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function (err) {
        console.warn('[pwa] service worker registration failed:', err);
      });
    });
  }

  // ── Helpers ──────────────────────────────────────────────────────
  var DISMISS_KEY = 'pwa-install-dismissed';
  var isStandalone =
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true;
  var dismissed = false;
  try {
    dismissed = localStorage.getItem(DISMISS_KEY) === '1';
  } catch (e) {}

  function rememberDismissal() {
    try {
      localStorage.setItem(DISMISS_KEY, '1');
    } catch (e) {}
  }

  function injectStyles() {
    if (document.getElementById('pwa-install-styles')) return;
    var css =
      '.pwa-install-banner{position:fixed;left:50%;bottom:20px;transform:translateX(-50%) translateY(140%);' +
      'z-index:1200;display:flex;align-items:center;gap:14px;max-width:min(440px,calc(100vw - 24px));' +
      'padding:14px 16px;border-radius:16px;background:rgba(18,18,28,0.96);color:#e0dbd2;' +
      'border:1px solid rgba(197,147,58,0.4);box-shadow:0 12px 40px rgba(0,0,0,0.55);' +
      'font-family:inherit;opacity:0;transition:transform .35s ease,opacity .35s ease}' +
      '.pwa-install-banner.pwa-show{transform:translateX(-50%) translateY(0);opacity:1}' +
      '.pwa-install-banner img{width:44px;height:44px;border-radius:11px;flex:0 0 auto}' +
      '.pwa-install-text{flex:1 1 auto;line-height:1.35}' +
      '.pwa-install-text strong{display:block;font-size:.95rem;color:#e6b95c;font-weight:600}' +
      '.pwa-install-text span{font-size:.8rem;color:#b9b2a5}' +
      '.pwa-install-actions{display:flex;align-items:center;gap:8px;flex:0 0 auto}' +
      '.pwa-install-btn{cursor:pointer;border:none;border-radius:10px;padding:9px 14px;font:inherit;' +
      'font-size:.85rem;font-weight:600;background:#c5933a;color:#07070c}' +
      '.pwa-install-close{cursor:pointer;border:none;background:transparent;color:#8a8478;' +
      'font-size:1.3rem;line-height:1;padding:4px 6px}';
    var style = document.createElement('style');
    style.id = 'pwa-install-styles';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function buildBanner(opts) {
    injectStyles();
    var banner = document.createElement('div');
    banner.className = 'pwa-install-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Install RPG Quest Guide');

    var icon = document.createElement('img');
    icon.src = 'images/icon-192.png';
    icon.alt = '';

    var text = document.createElement('div');
    text.className = 'pwa-install-text';
    text.innerHTML = '<strong>' + opts.title + '</strong><span>' + opts.subtitle + '</span>';

    var actions = document.createElement('div');
    actions.className = 'pwa-install-actions';

    if (opts.actionLabel) {
      var action = document.createElement('button');
      action.className = 'pwa-install-btn';
      action.type = 'button';
      action.textContent = opts.actionLabel;
      action.addEventListener('click', opts.onAction);
      actions.appendChild(action);
    }

    var close = document.createElement('button');
    close.className = 'pwa-install-close';
    close.type = 'button';
    close.setAttribute('aria-label', 'Dismiss');
    close.innerHTML = '&times;';
    close.addEventListener('click', function () {
      rememberDismissal();
      hideBanner(banner);
    });
    actions.appendChild(close);

    banner.appendChild(icon);
    banner.appendChild(text);
    banner.appendChild(actions);
    document.body.appendChild(banner);
    requestAnimationFrame(function () {
      banner.classList.add('pwa-show');
    });
    return banner;
  }

  function hideBanner(banner) {
    banner.classList.remove('pwa-show');
    setTimeout(function () {
      if (banner.parentNode) banner.parentNode.removeChild(banner);
    }, 400);
  }

  if (isStandalone || dismissed) return;

  // ── 2a. Android / Chromium: real install prompt ──────────────────
  var deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferredPrompt = e;
    var banner = buildBanner({
      title: 'Install Quest Guide',
      subtitle: 'Add it to your home screen for full-screen, offline access.',
      actionLabel: 'Install',
      onAction: function () {
        hideBanner(banner);
        deferredPrompt.prompt();
        deferredPrompt.userChoice.finally(function () {
          rememberDismissal();
          deferredPrompt = null;
        });
      },
    });
  });

  window.addEventListener('appinstalled', rememberDismissal);

  // ── 2b. iOS Safari: no prompt event, show manual instructions ────
  var ua = window.navigator.userAgent;
  var isIOS = /iphone|ipad|ipod/i.test(ua) && !window.MSStream;
  var isSafari = /^((?!chrome|android|crios|fxios).)*safari/i.test(ua);
  if (isIOS && isSafari) {
    window.addEventListener('load', function () {
      setTimeout(function () {
        if (dismissed || isStandalone) return;
        buildBanner({
          title: 'Add to Home Screen',
          subtitle: 'Tap the Share icon, then “Add to Home Screen”.',
          actionLabel: null,
          onAction: null,
        });
      }, 2500);
    });
  }
})();
