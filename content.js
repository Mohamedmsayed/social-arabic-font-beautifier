(function () {
  const fontUrl = chrome.runtime.getURL('fonts/IBMPlexArabic-Text.ttf');
  const hostname = window.location.hostname;
  const isTwitter = hostname.includes('x.com') || hostname.includes('twitter.com');
  const isFacebook = hostname.includes('facebook.com');

  const twitterCSS = `
    @font-face {
      font-family: 'XCustomArabic';
      src: url('${fontUrl}') format('truetype');
      font-weight: 100 900;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'TwitterChirp';
      src: url('${fontUrl}') format('truetype');
      unicode-range: U+0600-06FF, U+0750-077F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF;
      font-weight: 100 900;
      font-style: normal;
    }

    @font-face {
      font-family: 'TwitterChirpExtendedHeavy';
      src: url('${fontUrl}') format('truetype');
      unicode-range: U+0600-06FF, U+0750-077F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF;
      font-weight: 100 900;
      font-style: normal;
    }

    html, body, #react-root, div, span, p, a, article, h1, h2, h3, textarea, input,
    *[lang="ar"], *[dir="rtl"],
    div[data-testid="tweetText"],
    div[data-testid="tweetText"] *,
    div[data-testid="UserName"] *,
    div[data-testid="UserDescription"] * {
      font-family: 'XCustomArabic', 'TwitterChirp', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
    }

    div[lang="ar"], span[lang="ar"], *[dir="rtl"],
    div[data-testid="tweetText"][dir="rtl"],
    div[data-testid="tweetText"][lang="ar"] {
      line-height: 1.65 !important;
      letter-spacing: 0px !important;
    }
  `;

  const facebookCSS = `
    @font-face {
      font-family: 'XCustomArabic';
      src: url('${fontUrl}') format('truetype');
      font-weight: 100 900;
      font-style: normal;
      font-display: swap;
    }

    /* Override Facebook's default system/Segoe UI Arabic rendering */
    @font-face {
      font-family: 'Segoe UI';
      src: url('${fontUrl}') format('truetype');
      unicode-range: U+0600-06FF, U+0750-077F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF;
      font-weight: 100 900;
      font-style: normal;
    }

    @font-face {
      font-family: 'Segoe UI Historic';
      src: url('${fontUrl}') format('truetype');
      unicode-range: U+0600-06FF, U+0750-077F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF;
      font-weight: 100 900;
      font-style: normal;
    }

    @font-face {
      font-family: 'Tahoma';
      src: url('${fontUrl}') format('truetype');
      unicode-range: U+0600-06FF, U+0750-077F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF;
      font-weight: 100 900;
      font-style: normal;
    }

    html, body, div, span, p, a, h1, h2, h3, h4, textarea, input,
    *[dir="rtl"], *[dir="auto"], *[lang="ar"] {
      font-family: 'XCustomArabic', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
    }

    div[dir="auto"], span[dir="auto"], div[dir="rtl"], span[dir="rtl"] {
      line-height: 1.65 !important;
      letter-spacing: 0px !important;
    }
  `;

  let currentEnabled = false;

  function applyOrRemoveStyle(enabled) {
    currentEnabled = enabled;
    const existing = document.getElementById('x-arabic-font-fix');
    if (!enabled) {
      if (existing) existing.remove();
      return;
    }

    if (!existing) {
      const style = document.createElement('style');
      style.id = 'x-arabic-font-fix';
      style.textContent = isTwitter ? twitterCSS : (isFacebook ? facebookCSS : '');
      (document.head || document.documentElement).appendChild(style);
    }
  }

  function checkSettingsAndApply() {
    chrome.storage.sync.get({ enableTwitter: true, enableFacebook: true }, (settings) => {
      if (isTwitter) {
        applyOrRemoveStyle(settings.enableTwitter);
      } else if (isFacebook) {
        applyOrRemoveStyle(settings.enableFacebook);
      }
    });
  }

  // Initial check right away
  checkSettingsAndApply();

  // Listen for live toggle changes from the popup without needing a page refresh!
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'sync') {
      if (isTwitter && changes.enableTwitter !== undefined) {
        applyOrRemoveStyle(changes.enableTwitter.newValue);
      }
      if (isFacebook && changes.enableFacebook !== undefined) {
        applyOrRemoveStyle(changes.enableFacebook.newValue);
      }
    }
  });

  // Keep style injected if SPA DOM resets head
  const observer = new MutationObserver(() => {
    if (currentEnabled && !document.getElementById('x-arabic-font-fix')) {
      applyOrRemoveStyle(true);
    }
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
