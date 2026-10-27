window.toggleFaq = function (index) {
  document.querySelectorAll('.faq-item').forEach((item, i) => {
    if (i === index) item.classList.toggle('open');
    else item.classList.remove('open');
  });
};

function renderServiceDetail(serviceId) {
  const s = serviceData[serviceId];
  const app = document.getElementById('serviceDetailApp');
  if (!app) return;

  if (!s) {
    app.innerHTML = `<div class="container" style="padding:5rem 0;text-align:center;">
      <h2>Service Not Found</h2>
      <p><a href="services.html" class="btn" style="margin-top:1rem;">← Back to Services</a></p>
    </div>`;
    return;
  }

  const includedHTML = s.included.map(item => `<li><i class="fas fa-check-circle"></i> ${item}</li>`).join('');
  const quickHTML = s.quickFeatures.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('');
  const chargeHTML = s.chargeTable.map(row => `<tr><td><strong>${row.service}</strong></td><td>${row.desc}</td><td class="price-col">${row.price}</td></tr>`).join('');
  const stepsHTML = s.steps.map(step => `<li>${step}</li>`).join('');
  const faqHTML = s.faqs.map((faq, i) => `<div class="faq-item" data-faq="${i}"><div class="faq-question" onclick="toggleFaq(${i})"><span>${faq.q}</span><i class="fas fa-chevron-down"></i></div><div class="faq-answer">${faq.a}</div></div>`).join('');
  const relatedHTML = s.related.map(rel => {
    const r = serviceData[rel];
    if (!r) return '';
    return `<a class="related-card" href="service-detail.html?id=${rel}" style="text-decoration:none;"><i class="fas ${r.icon}"></i><h4>${r.title}</h4><p>${r.subtitle}</p></a>`;
  }).join('');

  app.innerHTML = `
    <div class="service-detail-hero">
      <div class="container">
        <div class="breadcrumb" style="margin-top: 0; margin-bottom: 1rem;">
          <a href="index.html">Home</a> / <a href="services.html">Services</a> / <span>${s.title}</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1.2rem; flex-wrap: wrap;">
          <div style="width: 70px; height: 70px; background: rgba(214, 140, 69, 0.2); border-radius: 20px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; animation: float 4s ease-in-out infinite;">
            <i class="fas ${s.icon}" style="font-size: 2rem; color: var(--accent);"></i>
          </div>
          <div>
            <h1 style="font-size: clamp(1.5rem, 4vw, 2.5rem); margin-bottom: 0.4rem;">${s.title}</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 0;">${s.subtitle}</p>
          </div>
        </div>
      </div>
    </div>

    <section style="padding: 3rem 0 5rem; background: var(--bg-primary);">
      <div class="container">
        <div class="service-detail-grid">
          <div class="service-detail-content reveal">
            <div class="service-detail-image">
              <img src="${s.photo}" alt="${s.title}" loading="lazy" onerror="this.style.display='none';this.parentElement.innerHTML='<div style=\\'font-size:6rem;\\'>${s.image}</div>'">
              <div class="img-emoji-overlay">${s.image}</div>
            </div>
            <h2>About This Service</h2>
            <p>${s.shortDesc}</p>
            <h3><i class="fas fa-list-check"></i> What's Included</h3>
            <ul class="included-list">${includedHTML}</ul>
            <h3><i class="fas fa-rupee-sign"></i> Service Charges</h3>
            <p>Transparent pricing — no hidden costs. Final price may vary based on parts required.</p>
            <div class="charge-table-wrap">
              <table class="charge-table">
                <thead><tr><th>Service</th><th>Description</th><th>Price</th></tr></thead>
                <tbody>${chargeHTML}</tbody>
              </table>
            </div>
            <h3><i class="fas fa-route"></i> How We Work</h3>
            <ol class="steps-list">${stepsHTML}</ol>
            <h3><i class="fas fa-circle-question"></i> Frequently Asked Questions</h3>
            <div>${faqHTML}</div>
          </div>
          <div>
            <div class="sidebar-card reveal">
              <div class="price-highlight">
                <div class="label">${s.priceLabel}</div>
                <div class="amount">${s.priceValue} <span>${s.priceUnit}</span></div>
              </div>
              <ul class="sidebar-features">${quickHTML}</ul>
              <a href="contact.html" class="btn" style="width: 100%; margin-bottom: 0.8rem;"><i class="fas fa-calendar-check"></i> Book This Service</a>
              <a href="tel:+919408282463" class="btn btn-outline" style="width: 100%;"><i class="fas fa-phone"></i> Call Now</a>
            </div>
            <div class="sidebar-card reveal" style="background: linear-gradient(135deg, var(--navy), var(--navy-light)); color: #fff; border: none;">
              <h3 style="color: #fff;"><i class="fas fa-headset" style="color: var(--accent);"></i> Need Help?</h3>
              <p style="color: rgba(255,255,255,0.8); font-size: 0.9rem; margin-bottom: 1rem;">Call our support team for instant assistance.</p>
              <p style="color: var(--accent); font-weight: 700; font-size: 1.1rem; margin-bottom: 0.5rem;">94082 82463</p>
              <p style="color: var(--accent); font-weight: 700; font-size: 1.1rem;">87808 43021</p>
            </div>
          </div>
        </div>
        <div class="related-services reveal">
          <h3 style="text-align: center; color: var(--navy); margin-bottom: 0.5rem;">Other Services You May Need</h3>
          <p style="text-align: center; color: var(--text-medium); margin-bottom: 1.5rem;">Click to view pricing and details</p>
          <div class="related-grid">${relatedHTML}</div>
        </div>
      </div>
    </section>
  `;

  setTimeout(initReveal, 100);
}

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('serviceDetailApp');
  if (!app) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || 'ac';
  renderServiceDetail(id);
});