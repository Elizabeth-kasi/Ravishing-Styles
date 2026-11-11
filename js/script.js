// Simple JavaScript features for the New Horizon assignment
const menuButton = document.getElementById('menuButton');
const nav = document.getElementById('mainNav');

if (menuButton && nav) {
  menuButton.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? 'Close' : 'Menu';
  });
}

// Filter products by category
const filterButtons = document.querySelectorAll('.filter-button');
const products = document.querySelectorAll('.product-card');
filterButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const category = button.dataset.category;
    filterButtons.forEach(function (item) { item.classList.remove('active'); });
    button.classList.add('active');
    products.forEach(function (product) {
      product.hidden = category !== 'all' && product.dataset.category !== category;
    });
  });
});

// Demonstration form: validation only; no messages are sent
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('formFeedback');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    feedback.className = 'form-feedback';
    if (!name || !email || !subject || !message) {
      feedback.textContent = 'Please fill in all fields.';
      feedback.classList.add('error');
    } else if (!emailPattern.test(email)) {
      feedback.textContent = 'Please enter a valid email address.';
      feedback.classList.add('error');
    } else {
      feedback.textContent = 'Your details are valid! This is a demonstration form, so no message was sent.';
      feedback.classList.add('success');
      form.reset();
    }
  });
}
