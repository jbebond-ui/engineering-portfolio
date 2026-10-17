(() => {
  'use strict';

  const storageKey = 'portfolio-theme';
  const root = document.documentElement;
  let preference = null;
  let systemPreference = null;
  let toggle = null;

  const validTheme = value => value === 'light' || value === 'dark';

  try {
    const stored = window.localStorage.getItem(storageKey);
    if (validTheme(stored)) preference = stored;
  } catch {
    // The toggle still works when browser privacy settings block storage.
  }

  if (typeof window.matchMedia === 'function') {
    systemPreference = window.matchMedia('(prefers-color-scheme: dark)');
  }

  const systemTheme = () => systemPreference && systemPreference.matches ? 'dark' : 'light';

  function syncToggle() {
    if (!toggle) return;
    const dark = root.dataset.theme === 'dark';
    toggle.setAttribute('aria-label', 'Dark mode');
    toggle.setAttribute('aria-pressed', String(dark));
    toggle.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    const browserColor = document.querySelector('meta[name="theme-color"]');
    if (browserColor) browserColor.content = theme === 'dark' ? '#111214' : '#fafafa';
    syncToggle();
  }

  // This script runs in the head before styles load, avoiding a light-theme flash.
  applyTheme(preference || systemTheme());

  function initializeToggle() {
    toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;
    syncToggle();
    toggle.addEventListener('click', () => {
      preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try {
        window.localStorage.setItem(storageKey, preference);
      } catch {
        // Keep the selected theme for this page even if it cannot be persisted.
      }
      applyTheme(preference);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeToggle, { once: true });
  } else {
    initializeToggle();
  }

  const followSystem = () => {
    if (!preference) applyTheme(systemTheme());
  };
  if (systemPreference) {
    if (typeof systemPreference.addEventListener === 'function') {
      systemPreference.addEventListener('change', followSystem);
    } else if (typeof systemPreference.addListener === 'function') {
      systemPreference.addListener(followSystem);
    }
  }

  // Keep an open tab consistent with explicit choices made in another tab.
  window.addEventListener('storage', event => {
    if (event.key !== storageKey && event.key !== null) return;
    preference = validTheme(event.newValue) ? event.newValue : null;
    applyTheme(preference || systemTheme());
  });
})();
