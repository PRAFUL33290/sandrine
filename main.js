const logo = document.getElementById('sandrine-logo');
const fallback = document.getElementById('sandrine-logo-fallback');
const acceptButton = document.getElementById('accept-proposal');
const validationSection = document.getElementById('validation');
let fallbackShown = false;

function showLogoFallback() {
  if (fallbackShown) {
    return;
  }

  fallbackShown = true;
  logo.style.display = 'none';
  fallback.style.display = 'grid';
}

logo.addEventListener('error', showLogoFallback, { once: true });

if (typeof logo.decode === 'function') {
  logo.decode().catch(showLogoFallback);
}

acceptButton.addEventListener('click', () => {
  validationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  validationSection.focus({ preventScroll: true });
});
