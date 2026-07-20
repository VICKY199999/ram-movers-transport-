const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.getElementById('quoteForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const pickup = document.getElementById('pickup').value.trim();
  const dropoff = document.getElementById('dropoff').value.trim();
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value || 'Not confirmed';
  const details = document.getElementById('details').value.trim() || 'No extra details';

  const message = `Hi RAM Movers, I would like a quote.

Name: ${name}
Phone: ${phone}
Service: ${service}
Pickup: ${pickup}
Drop-off: ${dropoff}
Date: ${date}
Details: ${details}`;

  window.location.href = `sms:+61480631657?body=${encodeURIComponent(message)}`;
});
