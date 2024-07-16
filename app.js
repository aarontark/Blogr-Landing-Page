const hamburgerIcon = document.querySelector('.hamburger-icon');
const navMenu = document.querySelector('.nav-menu');

hamburgerIcon.addEventListener('click', () => {
    if(hamburgerIcon.classList.contains('hamburger-icon')){
        hamburgerIcon.classList.remove('hamburger-icon');
        hamburgerIcon.classList.add('close-icon');
        hamburgerIcon.src = './images/icon-close.svg';
        navMenu.style.display = 'flex';
    } else {
        hamburgerIcon.classList.add('hamburger-icon');
        hamburgerIcon.classList.remove('close-icon');
        hamburgerIcon.src = './images/icon-hamburger.svg';
        navMenu.style.display = 'none';
    }
})