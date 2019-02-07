const nav = document.querySelector('nav');
const arrow = document.querySelector('.arrow');

arrow.addEventListener('click', function () {
  arrow.classList.toggle('on');
  nav.classList.toggle('on');
})