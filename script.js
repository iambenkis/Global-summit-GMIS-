const speakers = [
    {
        name : 'Jonh Maxwell',
        title : 'Leadership Expert',
        description : `Maxwell bachelor's degree at Circleville Bible College in 1969`,
        image : './imgs/jonhmaxwell.png'
    },
    {
        name : 'llllllll',
        title : 'Leadership Expert',
        description : `Maxwell bachelor's degree at Circleville Bible College in 1969`,
        image : './imgs/jonhmaxwell.png'
    } ,
    {
        name : 'vvvvvvvvvv',
        title : 'Leadership Expert',
        description : `Maxwell bachelor's degree at Circleville Bible College in 1969`,
        image : './imgs/jonhmaxwell.png'
    }
];
const hambuger = document.querySelector('.fa-bars');
const mobileMenu = document.querySelector('.mobile-menu');
const faMark = document.querySelector('.fa-xmark');
const lists = document.querySelectorAll('.na-list');
const speakerApp = document.querySelector('.speaker-container');

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

speakers.forEach((item) => {
    speakerApp.innerHTML += `
    <div class="speaker">
        <img src=${item.image} alt="">
        <div class="speaker-id">
            <h3>${item.name}</h3>
            <h4 id="job">${item.title}</h4>
            <p>${item.description}</p>
        </div>
    </div>
`
})

