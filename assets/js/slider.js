// ══════════════════════════════════════════════════════════════
//  SLIDER — ARROW NAVIGATION
// ══════════════════════════════════════════════════════════════

function slide(btn, dir) {
  const row      = btn.closest('.slider-row');
  const grid     = row.querySelector('.slider-grid');
  const viewport = row.querySelector('.slider-viewport');
  const card     = grid.querySelector('.card');
  if (!card) return;

  const cardW = card.offsetWidth + 14;
  const maxX  = -(grid.scrollWidth - viewport.offsetWidth + 2);
  const step  = cardW * 2;
  const currX = parseFloat(grid.dataset.x || 0);
  const newX  = Math.max(maxX, Math.min(0, currX - dir * step));

  grid.dataset.x       = newX;
  grid.style.transform = `translateX(${newX}px)`;

  row.querySelector('.slider-btn-left').classList.toggle('visible',  newX < 0);
  row.querySelector('.slider-btn-right').classList.toggle('visible', newX > maxX);
}


// ══════════════════════════════════════════════════════════════
//  SLIDER — AUTO SLIDE
// ══════════════════════════════════════════════════════════════

function initAutoSlider() {
  const AUTO_INTERVAL = 5000;
  let resumeTimeout = null;

  document.querySelectorAll('.slider-row').forEach(row => {
    const grid     = row.querySelector('.slider-grid');
    const viewport = row.querySelector('.slider-viewport');
    const leftBtn  = row.querySelector('.slider-btn-left');
    const rightBtn = row.querySelector('.slider-btn-right');

    leftBtn?.addEventListener('click', pauseAndResume);
    rightBtn?.addEventListener('click', pauseAndResume);

    if (!grid || !viewport) return;

    let interval  = null;
    let isVisible = false;

    function getCardWidth() {
      const card = grid.querySelector('.card');
      return card ? card.offsetWidth + 14 : 0;
    }

    function getMaxX() {
      return -(grid.scrollWidth - viewport.offsetWidth);
    }

    function getCurrentX() {
      return parseFloat(grid.dataset.x || 0);
    }

    function setX(x, smooth = true) {
      const clamped = Math.max(getMaxX(), Math.min(0, x));
      grid.dataset.x        = clamped;
      grid.style.transition = smooth
        ? 'transform 1.15s cubic-bezier(0.22, 1, 0.36, 1)'
        : 'none';
      grid.style.transform  = `translateX(${clamped}px)`;
      row.querySelector('.slider-btn-left')?.classList.toggle('visible',  clamped < 0);
      row.querySelector('.slider-btn-right')?.classList.toggle('visible', clamped > getMaxX());
    }

    function autoMove() {
      const currentX = getCurrentX();
      const maxX     = getMaxX();
      const step     = getCardWidth() * 1.35;
      let nextX      = currentX - step;

      if (nextX <= maxX) {
        setX(maxX);
        setTimeout(() => {
          grid.dataset.x        = 0;
          grid.style.transition = 'transform 1.8s cubic-bezier(0.65, 0, 0.35, 1)';
          grid.style.transform  = `translateX(0px)`;
          row.querySelector('.slider-btn-left')?.classList.remove('visible');
          row.querySelector('.slider-btn-right')?.classList.add('visible');
        }, 1300);
      } else {
        setX(nextX);
      }
    }

    function startAuto() {
      if (interval) return;
      interval = setInterval(() => { if (isVisible) autoMove(); }, AUTO_INTERVAL);
    }

    function stopAuto() {
      clearInterval(interval);
      interval = null;
    }

    function pauseAndResume() {
      stopAuto();
      clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(() => { if (isVisible) startAuto(); }, 10000);
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        isVisible = entry.isIntersecting;
        if (isVisible) startAuto(); else stopAuto();
      });
    }, { threshold: 0.45 });

    observer.observe(row);

    grid.addEventListener('touchstart', pauseAndResume, { passive: true });
    grid.addEventListener('touchend',   () => { pauseAndResume(); }, { passive: true });
    row.addEventListener('mouseenter',  stopAuto);
    row.addEventListener('mouseleave',  () => { if (isVisible) startAuto(); });
  });
}


// ══════════════════════════════════════════════════════════════
//  SLIDER — TOUCH/SWIPE WITH MOMENTUM
// ══════════════════════════════════════════════════════════════

function initTouchSwipe() {
  document.querySelectorAll('.slider-grid').forEach(grid => {
    const viewport = () => grid.closest('.slider-viewport');
    const maxX     = () => -(grid.scrollWidth - viewport().offsetWidth + 2);
    const currX    = () => parseFloat(grid.dataset.x || 0);

    let startX   = 0;
    let startVal = 0;
    let lastX    = 0;
    let lastTime = 0;
    let velocity = 0;
    let rafId    = null;
    let dragging = false;

    function setX(x) {
      const clamped             = Math.max(maxX(), Math.min(0, x));
      grid.dataset.x            = clamped;
      grid.style.transition     = 'none';
      grid.style.transform      = `translateX(${clamped}px)`;
      const row = grid.closest('.slider-row');
      if (row) {
        row.querySelector('.slider-btn-left').classList.toggle('visible',  clamped < 0);
        row.querySelector('.slider-btn-right').classList.toggle('visible', clamped > maxX());
      }
      return clamped;
    }

    function momentum() {
      if (Math.abs(velocity) < 0.08) { velocity = 0; return; }
      velocity *= 0.965;
      const clamped = setX(currX() + velocity);
      if (clamped === 0 || clamped === maxX()) { velocity = 0; return; }
      rafId = requestAnimationFrame(momentum);
    }

    grid.addEventListener('touchstart', e => {
      cancelAnimationFrame(rafId);
      dragging           = true;
      startX             = e.touches[0].clientX;
      lastX              = startX;
      lastTime           = Date.now();
      startVal           = currX();
      velocity           = 0;
      grid._startY       = e.touches[0].clientY;
      grid._lockAxis     = undefined;
      grid.style.transition = 'none';
    }, { passive: true });

    grid.addEventListener('touchmove', e => {
      if (!dragging) return;

      const now    = Date.now();
      const touchX = e.touches[0].clientX;
      const touchY = e.touches[0].clientY;

      if (typeof grid._lockAxis === 'undefined') {
        const dx = Math.abs(touchX - startX);
        const dy = Math.abs(touchY - (grid._startY || touchY));
        if (dx > 3 || dy > 3) {
          grid._lockAxis = dx >= dy ? 'x' : 'y';
        } else {
          return;
        }
      }

      if (grid._lockAxis === 'y') return;
      e.preventDefault();

      const dt  = Math.max(now - lastTime, 1);
      velocity  = (touchX - lastX) / dt * 18;
      lastX     = touchX;
      lastTime  = now;

      const rawX    = startVal + (touchX - startX);
      const mx      = maxX();
      const bounded = rawX > 0
        ? rawX * 0.21
        : rawX < mx
          ? mx + (rawX - mx) * 0.21
          : rawX;

      setX(bounded);
    }, { passive: false });

    grid.addEventListener('touchend', e => {
      dragging = false;
      cancelAnimationFrame(rafId);

      const mx   = maxX();
      const curr = currX();
      if (curr > 0 || curr < mx) {
        const target          = curr > 0 ? 0 : mx;
        grid.style.transition = 'transform 0.32s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        grid.style.transform  = `translateX(${target}px)`;
        grid.dataset.x        = target;
        velocity = 0;
        return;
      }

      rafId = requestAnimationFrame(momentum);
    }, { passive: true });

    grid.addEventListener('touchcancel', () => {
      dragging = false;
      velocity = 0;
    }, { passive: true });
  });
}