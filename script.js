
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
  menuButton.textContent = open ? '✕' : '☰';
  document.body.classList.toggle('menu-open', open);
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
    document.body.classList.remove('menu-open');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('quoteForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const subject = encodeURIComponent('Quote Request - Ram Moving and Transport');
  const body = encodeURIComponent(
`Name: ${document.getElementById('name').value}
Phone: ${document.getElementById('phone').value}
Moving from: ${document.getElementById('from').value}
Moving to: ${document.getElementById('to').value}
Moving date: ${document.getElementById('date').value}
Service: ${document.getElementById('service').value}

Job details:
${document.getElementById('details').value}`
  );
  window.location.href = `mailto:rammovingandtransport@gmail.com?subject=${subject}&body=${body}`;
});
