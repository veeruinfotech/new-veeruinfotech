// ---------- CONTACT FORM ----------
function initContactForm() {
  const inquiryType = document.getElementById('inquiryType');
  const dynamicGroup = document.getElementById('dynamicGroup');
  const dynamicSelect = document.getElementById('dynamicSelect');
  const dynamicLabel = document.getElementById('dynamicLabel');
  const form = document.getElementById('contactForm');
  if (!inquiryType || !form) return;

  const serviceOptions = ['AC Service','TV Repair','Refrigerator Repair','CCTV Installation','CCTV Repair','Laptop Repair','Computer Repair','Chip Level Repair','Printer Service','Fire Safety System','WiFi Setup','Networking','SSD / RAM Upgrade','AMC / Maintenance'];
  const productOptions = ['Laptop','Desktop PC','CCTV Camera','Printer','Cartridge','WiFi Router','Solar Camera','Fire Extinguisher','Accessories','Storage / RAM'];

  inquiryType.addEventListener('change', function () {
    const val = this.value;
    dynamicSelect.innerHTML = '';
    if (val === 'Service') {
      dynamicLabel.innerHTML = 'Select Service <span class="required">*</span>';
      dynamicSelect.name = 'Specific Service/Product';
      serviceOptions.forEach(opt => { const o = document.createElement('option'); o.value = opt; o.textContent = opt; dynamicSelect.appendChild(o); });
      dynamicGroup.style.display = 'block';
      dynamicSelect.required = true;
    } else if (val === 'Product Inquiry') {
      dynamicLabel.innerHTML = 'Select Product <span class="required">*</span>';
      dynamicSelect.name = 'Specific Service/Product';
      productOptions.forEach(opt => { const o = document.createElement('option'); o.value = opt; o.textContent = opt; dynamicSelect.appendChild(o); });
      dynamicGroup.style.display = 'block';
      dynamicSelect.required = true;
    } else {
      dynamicGroup.style.display = 'none';
      dynamicSelect.required = false;
    }
  });

  form.addEventListener('submit', function () {
    const v = (id) => (document.getElementById(id) || {}).value || '';
    const name = v('custName'), phone = v('custPhone'), email = v('custEmail') || '—';
    const city = v('custCity'), address = v('custAddress'), inquiry = v('inquiryType');
    const specific = dynamicSelect.value || '—';
    const message = (v('message') || '—').trim();
    const d = '━━━━━━━━━━━━━━━━━━━━━━━━━━━';

    const part1 = `${d}\n📋 SHARE WITH TECHNICIANS\n${d}\nCustomer : ${name}\nPhone    : ${phone}\nEmail    : ${email}\nCity     : ${city}\n${d}`;
    const part2 = `${d}\n🛠️ JOB DETAILS\n${d}\nInquiry  : ${inquiry}\nSpecific : ${specific}\nDetails  : ${message}\n${d}`;
    const fullAddress = `${d}\n📌 ADDRESS\n${d}\n${address}, ${city}, Gujarat\n${d}`;

    const ff = document.getElementById('formattedEmail');
    if (ff) ff.value = `\n${part1}\n\n${part2}\n\n${fullAddress}\n`;

    const btn = form.querySelector('button[type="submit"]');
    if (btn) { btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'; btn.disabled = true; }
  });
}

// ---------- TECHNICIAN FORM ----------
function initTechnicianForm() {
  const techField = document.getElementById('techField');
  const techOtherGroup = document.getElementById('techOtherGroup');
  const techOther = document.getElementById('techOther');
  const form = document.getElementById('technicianForm');
  if (!techField || !form) return;

  techField.addEventListener('change', function () {
    if (this.value === 'Other') {
      techOtherGroup.style.display = 'block';
      techOther.required = true;
    } else {
      techOtherGroup.style.display = 'none';
      techOther.required = false;
    }
  });

  form.addEventListener('submit', function () {
    const v = (id) => (document.getElementById(id) || {}).value || '';
    const name = v('techName'), email = v('techEmail'), phone = v('techPhone');
    const address = v('techAddress'), field = v('techField');
    const otherField = (v('techOther') || '').trim();
    const experience = (v('techExperience') || '—').trim();
    const description = (v('techDescription') || '').trim();
    const finalField = field === 'Other' ? (otherField || 'Other') : field;
    const d = '━━━━━━━━━━━━━━━━━━━━━━━━━━━';

    const part1 = `${d}\n🧑‍🔧 TECHNICIAN\n${d}\nName     : ${name}\nEmail    : ${email}\nPhone    : ${phone}\nField    : ${finalField}\nExp      : ${experience}\n${d}`;
    const part2 = `${d}\n📋 APPLICATION\n${d}\nAddress  : ${address}\nMessage  : ${description}\n${d}`;

    const ff = document.getElementById('techFormattedEmail');
    if (ff) ff.value = `\n${part1}\n\n${part2}\n`;

    const btn = form.querySelector('button[type="submit"]');
    if (btn) { btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...'; btn.disabled = true; }
  });
}

// ---------- REVIEW FORM ----------
function initReviewForm() {
  const form = document.getElementById('reviewForm');
  if (!form) return;

  const stars = document.querySelectorAll('#starRating i');
  const ratingValue = document.getElementById('ratingValue');
  const ratingText = document.getElementById('ratingText');
  const typeToggle = document.getElementById('revTypeToggle');
  const revType = document.getElementById('revType');
  const revServiceGroup = document.getElementById('revServiceGroup');
  const revProductGroup = document.getElementById('revProductGroup');
  const revService = document.getElementById('revService');
  const revProduct = document.getElementById('revProduct');

  const labels = { 1: '😞 Poor', 2: '😐 Fair', 3: '🙂 Good', 4: '😊 Very Good', 5: '🤩 Excellent' };

  stars.forEach(star => {
    star.addEventListener('mouseenter', function () {
      const r = parseInt(this.dataset.rating);
      stars.forEach((s, i) => s.classList.toggle('hovered', i < r));
    });
    star.addEventListener('mouseleave', () => stars.forEach(s => s.classList.remove('hovered')));
    star.addEventListener('click', function () {
      const r = parseInt(this.dataset.rating);
      ratingValue.value = r;
      stars.forEach((s, i) => s.classList.toggle('selected', i < r));
      ratingText.textContent = labels[r];
      ratingText.classList.add('active');
    });
  });

  if (typeToggle) {
    typeToggle.addEventListener('click', function (e) {
      const btn = e.target.closest('.toggle-btn');
      if (!btn) return;
      const type = btn.dataset.type;
      revType.value = type;
      typeToggle.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (type === 'Service') {
        revServiceGroup.style.display = 'block';
        revProductGroup.style.display = 'none';
        revService.required = true;
        revProduct.required = false;
      } else {
        revServiceGroup.style.display = 'none';
        revProductGroup.style.display = 'block';
        revService.required = false;
        revProduct.required = true;
      }
    });
  }

  form.addEventListener('submit', function (e) {
    if (!ratingValue.value) { e.preventDefault(); alert('Please select a star rating.'); return; }
    const btn = form.querySelector('button[type="submit"]');
    if (btn) { btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...'; btn.disabled = true; }
  });
}

// ---------- BOOT ON PAGE LOAD ----------
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('contactForm')) initContactForm();
  if (document.getElementById('technicianForm')) initTechnicianForm();
  if (document.getElementById('reviewForm')) initReviewForm();
});