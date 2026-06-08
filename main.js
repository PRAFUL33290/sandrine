const logo = document.getElementById('sandrine-logo');
const fallback = document.getElementById('sandrine-logo-fallback');
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
