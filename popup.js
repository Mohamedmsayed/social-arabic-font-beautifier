document.addEventListener('DOMContentLoaded', () => {
  const toggleTwitter = document.getElementById('toggleTwitter');
  const toggleFacebook = document.getElementById('toggleFacebook');

  // Load saved preferences (both enabled by default)
  chrome.storage.sync.get({ enableTwitter: true, enableFacebook: true }, (settings) => {
    toggleTwitter.checked = settings.enableTwitter;
    toggleFacebook.checked = settings.enableFacebook;
  });

  // Save on change — content.js listens to storage changes and updates live!
  toggleTwitter.addEventListener('change', () => {
    chrome.storage.sync.set({ enableTwitter: toggleTwitter.checked });
  });

  toggleFacebook.addEventListener('change', () => {
    chrome.storage.sync.set({ enableFacebook: toggleFacebook.checked });
  });
});
