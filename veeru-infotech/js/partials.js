// Loads shared partials into slots on the page
async function loadPartial(slotId, file) {
  const slot = document.getElementById(slotId);
  if (!slot) return;
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error('Failed to load ' + file);
    slot.innerHTML = await res.text();
  } catch (err) {
    console.warn('Partial load failed:', file, err);
  }
}

async function loadAllPartials() {
  await Promise.all([
    loadPartial('popup-slot', 'partials/popup.html'),
    loadPartial('topbar-slot', 'partials/topbar.html'),
    loadPartial('header-slot', 'partials/header.html'),
    loadPartial('footer-slot', 'partials/footer.html'),
    loadPartial('floating-slot', 'partials/floating.html')
  ]);

  // After partials are in, wire up the popup + nav
  if (typeof initFestivePopup === 'function') initFestivePopup();
  if (typeof initNav === 'function') initNav();
  if (typeof initScroll === 'function') initScroll();
}