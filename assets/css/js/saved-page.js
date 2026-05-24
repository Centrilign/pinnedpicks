// ── SAVED PINS — SAVED PAGE ──
// Renders saved pins from localStorage and handles removal.

function getSavedPins() {
  return JSON.parse(localStorage.getItem('savedPins')) || [];
}

function setSavedPins(pins) {
  localStorage.setItem('savedPins', JSON.stringify(pins));
}

function renderSavedPins() {

  const grid  = document.getElementById('savedPinsGrid');
  const empty = document.getElementById('emptyState');
  const pins  = getSavedPins();

  grid.innerHTML = '';

  if (!pins.length) {
    empty.style.display = 'flex';
    return;
  }

  empty.style.display = 'none';

  pins.forEach(pin => {

    const card     = document.createElement('a');
    card.className = 'card';
    card.href      = pin.href;
    card.target    = '_blank';
    card.rel       = 'noopener nofollow';

    card.innerHTML = `
      <img
        class="card-img"
        src="${pin.image}"
        alt="${pin.title}"
        loading="lazy"
      />
      <div class="card-body">
        <div class="meta-row">
          <span class="meta-tag">${pin.platform || 'Saved'}</span>
          <span class="meta-tag">${pin.category || 'Products'}</span>
        </div>
        <h3>${pin.title}</h3>
        <div class="card-footer">
          <span class="card-cta">Check Price →</span>
          <button class="save-btn" aria-label="Remove saved product" type="button">
            <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
        </div>
      </div>
    `;

    const removeBtn = card.querySelector('.save-btn');
    removeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const updated = getSavedPins().filter(item => item.title !== pin.title);
      setSavedPins(updated);
      card.remove();
      if (!updated.length) empty.style.display = 'flex';
    });

    grid.appendChild(card);
  });
}

function updateSavedBadge() {
  const count    = getSavedPins().length;
  const btn      = document.querySelector('.saved-nav-btn');
  if (!btn) return;
  const existing = btn.querySelector('.saved-badge');
  if (count > 0) {
    if (existing) { existing.textContent = count; }
    else {
      const badge       = document.createElement('span');
      badge.className   = 'saved-badge';
      badge.textContent = count;
      btn.appendChild(badge);
    }
  } else if (existing) {
    existing.remove();
  }
}

renderSavedPins();
updateSavedBadge();