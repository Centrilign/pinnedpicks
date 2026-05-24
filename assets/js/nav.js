// ══════════════════════════════════════════════════════════════
//  MOBILE NAV DRAWER
// ══════════════════════════════════════════════════════════════

function closeMobileNav() {
  const drawer = document.getElementById('mobileNavDrawer');
  drawer.classList.remove('open');
  document.body.classList.remove('nav-open');
}

document.getElementById('mobileMenuBtn').addEventListener('click', function () {
  const drawer = document.getElementById('mobileNavDrawer');
  drawer.classList.add('open');
  document.body.classList.add('nav-open');
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeMobileNav();
});


// ══════════════════════════════════════════════════════════════
//  AUTO-HIDE / SHOW NAVBAR ON SCROLL
// ══════════════════════════════════════════════════════════════

(function initNavScroll() {
  const headerEl = document.querySelector('header');
  let lastY      = window.scrollY;
  let ticking    = false;
  let navLocked  = false;

  // Exposed so search.js can pause nav hiding while mobile search is open
  window._navScrollLock   = function () { navLocked = true; };
  window._navScrollUnlock = function () { navLocked = false; };

  window.addEventListener('scroll', () => {
    if (ticking || navLocked) return;
    ticking = true;

    requestAnimationFrame(() => {
      const currentY = window.scrollY;
      const diff     = currentY - lastY;

      if (currentY <= 8) {
        headerEl.classList.remove('header-hidden');
        lastY   = currentY;
        ticking = false;
        return;
      }

      if (Math.abs(diff) >= 2) {
        if (diff > 0) {
          headerEl.classList.add('header-hidden');
        } else {
          headerEl.classList.remove('header-hidden');
        }
      }

      lastY   = currentY;
      ticking = false;
    });
  }, { passive: true });
})();