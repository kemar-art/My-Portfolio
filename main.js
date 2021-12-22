const ham = document.getElementById('ham');
const menu = document.getElementById('menu');
const links = document.querySelector('.menu-list');
const close = document.querySelectorAll('.menu-icon span').child;

ham.addEventListener('click', () => {
  links.classList.toggle('active');
  close.forEach((child) => {
    child.classList.toggle('animated');
  });
});

