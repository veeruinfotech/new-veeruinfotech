function initProductFilter() {
  const filterTabs = document.getElementById('filterTabs');
  const productGrid = document.getElementById('productGrid');
  const noProducts = document.getElementById('noProducts');
  if (!filterTabs || !productGrid) return;

  const cards = productGrid.querySelectorAll('.product-card');

  filterTabs.addEventListener('click', function (e) {
    const tab = e.target.closest('.filter-tab');
    if (!tab) return;

    filterTabs.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter;
    let visibleCount = 0;

    cards.forEach(card => {
      const cardCat = card.dataset.category || '';
      const match = (filter === 'all' || cardCat === filter);
      if (match) {
        card.classList.remove('hidden');
        card.classList.add('filter-show');
        visibleCount++;
        setTimeout(() => card.classList.remove('filter-show'), 500);
      } else {
        card.classList.add('hidden');
      }
    });

    if (noProducts) noProducts.style.display = visibleCount === 0 ? 'block' : 'none';
    setTimeout(initReveal, 50);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('productGrid')) initProductFilter();
});