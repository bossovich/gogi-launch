const sidebar = document.querySelector('.sidebar');
const burger = document.querySelector('.hamburger');

burger.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

const why = document.getElementById('whyUs');
const hinkali = document.getElementById('hinkali');

why.addEventListener('mouseenter', () => {
  hinkali.classList.add('animate');
});

why.addEventListener('mouseleave', () => {
  hinkali.classList.remove('animate');
});
