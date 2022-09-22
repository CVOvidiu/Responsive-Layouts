const navToggle = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.nav-toggle');


navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})