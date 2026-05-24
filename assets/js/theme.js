// ══════════════════════════════════════════════════════════════
//  THEME TOGGLE
//  Used on all pages.
// ══════════════════════════════════════════════════════════════

(function initTheme() {
  const html  = document.documentElement;
  const btn   = document.getElementById('themeBtn');
  if (!btn) return;
  const saved = localStorage.getItem('pp-theme') || 'light';

  html.setAttribute('data-theme', saved);
  btn.textContent = saved === 'dark' ? '☀' : '☽';

  btn.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    localStorage.setItem('pp-theme', next);
    btn.textContent = next === 'dark' ? '☀' : '☽';
  });
})();