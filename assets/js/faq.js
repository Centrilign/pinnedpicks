// ══════════════════════════════════════════════════════════════
//  FAQ ACCORDION
// ══════════════════════════════════════════════════════════════

function toggleFaq(btn) {
  const item   = btn.closest('.faq-item');
  const wrap   = item.querySelector('.faq-answer-wrap');
  const isOpen = item.classList.contains('open');

  // Close all others
  document.querySelectorAll('.faq-item.open').forEach(openItem => {
    if (openItem !== item) {
      openItem.classList.remove('open');
      openItem.querySelector('.faq-answer-wrap').style.maxHeight = '0';
      openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    }
  });

  if (isOpen) {
    item.classList.remove('open');
    wrap.style.maxHeight = '0';
    btn.setAttribute('aria-expanded', 'false');
  } else {
    item.classList.add('open');
    wrap.style.maxHeight = wrap.scrollHeight + 'px';
    btn.setAttribute('aria-expanded', 'true');
  }
}