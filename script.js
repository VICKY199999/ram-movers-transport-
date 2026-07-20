const menu = document.querySelector('.mobile-menu');
const nav = document.querySelector('.nav');

menu.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.getElementById('quoteForm').addEventListener('submit', event => {
  event.preventDefault();

  const values = {
    name: document.getElementById('name').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    pickup: document.getElementById('pickup').value.trim(),
    dropoff: document.getElementById('dropoff').value.trim(),
    service: document.getElementById('service').value,
    date: document.getElementById('date').value || 'Not confirmed',
    details: document.getElementById('details').value.trim() || 'No extra details'
  };

  const message = `Hi RAM Movers, I would like a quote.

Name: ${values.name}
Phone: ${values.phone}
Service: ${values.service}
Pickup: ${values.pickup}
Drop-off: ${values.dropoff}
Date: ${values.date}
Details: ${values.details}`;

  window.location.href = `sms:+61480631657?body=${encodeURIComponent(message)}`;
});
