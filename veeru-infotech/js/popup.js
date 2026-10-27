function initFestivePopup() {
  const popup       = document.getElementById('festivePopup');
  const closeBtn    = document.getElementById('festiveClose');
  const whatsappBtn = document.getElementById('festiveWhatsapp');
  if (!popup || !closeBtn || !whatsappBtn) return;

  if (!FESTIVE_CONFIG.enabled) { popup.remove(); return; }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const start = FESTIVE_CONFIG.startDate ? new Date(FESTIVE_CONFIG.startDate + 'T00:00:00') : null;
  const end   = FESTIVE_CONFIG.endDate   ? new Date(FESTIVE_CONFIG.endDate   + 'T23:59:59') : null;
  const beforeStart = start && today < start;
  const afterEnd    = end   && today > end;
  if (beforeStart || afterEnd) { popup.remove(); return; }

  const cfg = FESTIVE_CONFIG;
  const fillFestival = (str) => (str || '').replace(/\{festival\}/g, cfg.festivalName);

  const setText = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };
  const setHtml = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };

  setText('festiveEmojiRow', cfg.emojis);
  setText('festiveBadge', '🎊 ' + cfg.festivalName + ' Special Offer 🎊');
  setHtml('festiveHeading', fillFestival(cfg.heading));
  setText('festiveDiscountBig', cfg.discount);
  setHtml('festiveScopeBadge', '<i class="fas fa-video"></i> ' + cfg.scope + ' <i class="fas fa-mouse" style="margin-left:0.4rem;"></i>');
  setHtml('festiveDesc', fillFestival(cfg.description));
  if (cfg.chips) setHtml('festiveChips', cfg.chips.map(c => '<span>' + c + '</span>').join(''));
  setHtml('festiveTerms', '<i class="fas fa-info-circle"></i> ' + fillFestival(cfg.terms));

  const waMsg = fillFestival(cfg.whatsappMessage)
    .replace(/\{discount\}/g, cfg.discount)
    .replace(/\{scope\}/g, cfg.scope);
  whatsappBtn.href = 'https://wa.me/919408282463?text=' + encodeURIComponent(waMsg);

  const dismissedKey = 'festivePopupDismissed_' + cfg.festivalName;
  const dismissed    = sessionStorage.getItem(dismissedKey);

  if (!dismissed) {
    setTimeout(() => { popup.classList.add('show'); addConfetti(); }, cfg.delayMs || 4000);
  }

  function closePopup() {
    popup.classList.remove('show');
    sessionStorage.setItem(dismissedKey, 'true');
  }

  closeBtn.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); closePopup(); });
  popup.addEventListener('click', (e) => { if (e.target === popup) closePopup(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popup.classList.contains('show')) closePopup();
  });
  whatsappBtn.addEventListener('click', () => setTimeout(closePopup, 800));

  function addConfetti() {
    const colors = ['#d68c45', '#e74c3c', '#f5b342', '#25D366', '#4285F4'];
    const popupEl = popup.querySelector('.festive-popup');
    if (!popupEl) return;
    for (let i = 0; i < 12; i++) {
      const dot = document.createElement('div');
      dot.className = 'festive-confetti';
      dot.style.background = colors[Math.floor(Math.random() * colors.length)];
      dot.style.left = Math.random() * 100 + '%';
      dot.style.bottom = '0';
      dot.style.animationDelay = Math.random() * 2 + 's';
      dot.style.animationDuration = (2 + Math.random() * 2) + 's';
      popupEl.appendChild(dot);
      setTimeout(() => dot.remove(), 5000);
    }
  }
}