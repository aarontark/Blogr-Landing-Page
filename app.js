const hamburgerIcon = document.querySelector('.hamburger-icon');
const navMenu = document.querySelector('.nav-menu');
const navMenuDropdown = document.querySelectorAll('.nav-menu__dropdown');
const navMenuItems = document.querySelectorAll('.nav-menu__items');

navMenuItems.forEach((e) => {
    e.style.display = 'none';
})

alert(window.innerHeight);
alert(window.innerWidth);

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
        navMenuItems.forEach((e) => {
            e.style.display = 'none';
        })
    }
})

navMenuDropdown.forEach((e) => {
    e.addEventListener('click', () => {
        if (e.nextElementSibling.style.display === 'none') {
            e.classList.add('uparrow');
            e.nextElementSibling.style.display = 'flex';
        } else if (e.nextElementSibling.style.display === 'flex') {
            e.classList.remove('uparrow');
            e.nextElementSibling.style.display = 'none';
        }
    })
});