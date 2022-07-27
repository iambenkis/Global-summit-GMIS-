const hambuger = document.querySelector('.fa-bars');
const mobileMenu = document.querySelector('.mobile-menu');

const openMenu = () => {
    mobileMenu.classList.add('active-menu');
}

hambuger.addEventListener('click', openMenu);