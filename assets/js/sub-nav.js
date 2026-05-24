// ── SUB-PAGE MOBILE NAV DRAWER ──
// Used on about, saved, privacy, terms pages.

function closeSubNav() {
  document.getElementById('subNavDrawer').classList.remove('open');
  document.body.classList.remove('nav-open');
}

document.getElementById('subMobileBtn').addEventListener('click', function () {
  document.getElementById('subNavDrawer').classList.add('open');
  document.body.classList.add('nav-open');
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeSubNav();
});