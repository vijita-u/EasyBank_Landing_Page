const header = document.querySelector('.header');
const hamburgerMenu = document.querySelector('#hamburgerMenu');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.header__menu');

hamburgerMenu.addEventListener('click', () => {
    
    header.classList.toggle('open');
    
    if (header.classList.contains('open')) {
        overlay.classList.add('fade-in');
        menu.classList.add('fade-in');
        overlay.classList.remove('fade-out');
        menu.classList.remove('fade-out');
    }
    else {
        overlay.classList.add('fade-out');
        menu.classList.add('fade-out');
        overlay.classList.remove('fade-in');
        menu.classList.remove('fade-in');
    }
})