/* =====================================================
   Crave Bakery - main JavaScript (linked from index.html)
   ===================================================== */

// =====================================================
// WHATSAPP SETTINGS  (edit these two lines only)
// Number: country code + number, digits only. No +, spaces or leading 0.
// Example: Nigeria 0801 234 5678  ->  "2348012345678"
// =====================================================
const WHATSAPP_NUMBER  = "2348000000000";
const WHATSAPP_MESSAGE = "Hello Crave Bakery, I would like to place an order.";

// Applies the number and message to every link with class "wa-link"
document.querySelectorAll('.wa-link').forEach(link => {
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
});

// --- Scroll animation: reveals elements with class "reveal" when they enter the screen ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('show'), (i % 4) * 90); // small stagger
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// --- Navbar shadow when scrolling ---
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40));

// --- Product filter buttons ---
const buttons = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.product-item');
buttons.forEach(btn => btn.addEventListener('click', () => {
  buttons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  items.forEach(item => {
    const show = btn.dataset.filter === 'all' || item.dataset.cat === btn.dataset.filter;
    item.classList.toggle('hide', !show);
  });
}));
