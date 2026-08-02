const menuButton=document.querySelector('.menu-button');
const menu=document.querySelector('.menu');
menuButton.addEventListener('click',()=>menu.classList.toggle('open'));
document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('quoteForm').addEventListener('submit',function(e){
e.preventDefault();
const subject=encodeURIComponent('Quote Request - Ram Moving and Transport');
const body=encodeURIComponent(
`Name: ${document.getElementById('name').value}
Phone: ${document.getElementById('phone').value}
Moving from: ${document.getElementById('from').value}
Moving to: ${document.getElementById('to').value}
Service: ${document.getElementById('service').value}
Details: ${document.getElementById('details').value}`);
window.location.href=`mailto:rammovingandtransport@gmail.com?subject=${subject}&body=${body}`;
});