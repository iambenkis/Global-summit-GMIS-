const hambuger = document.querySelector('.fa-bars');
const mobileMenu = document.querySelector('.mobile-menu');
const faMark = document.querySelector('.fa-xmark');
const lists = document.querySelectorAll('.na-list');

const openMenu = () => {
    mobileMenu.classList.add('active-menu');
}

const closeMenu = () => {
    mobileMenu.classList.remove('active-menu');
}

hambuger.addEventListener('click', openMenu);
faMark.addEventListener('click', closeMenu);
lists.forEach(list => {
    list.addEventListener('click',closeMenu);
})