const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.nav-links');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('quoteForm').addEventListener('submit',function(e){
  e.preventDefault();
  const val=id=>encodeURIComponent(document.getElementById(id).value.trim());
  const subject=encodeURIComponent('Moving quote request');
  const body=`Name: ${val('name')}%0APhone: ${val('phone')}%0APickup: ${val('pickup')}%0ADrop-off: ${val('dropoff')}%0A%0ADetails:%0A${val('details')}`;
  window.location.href=`mailto:rammovingandtransport@gmail.com?subject=${subject}&body=${body}`;
});
