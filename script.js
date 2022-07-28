const speakers = [
  {
    name: 'Jonh Maxwell',
    title: 'Leadership Expert',
    description: 'Lisa is a celebrated motivational speaker',
    image: './imgs/jonhmaxwell.png',
  },
  {
    name: 'Lisa Nichols',
    title: 'Transformational Speaker/Coach',
    description: 'Lisa is a celebrated motivational speaker',
    image: './imgs/lisanichols.jpeg',
  },
  {
    name: ' Noura Al Kaabi',
    title: 'Minister',
    description: 'Lisa is a celebrated motivational speaker',
    image: './imgs/noura.png',
  },
  {
    name: 'Patrice Caine',
    title: 'CEO',
    description: 'Lisa is a celebrated motivational speaker',
    image: './imgs/caine.png',
  },
  {
    name: 'Mateo Renzi',
    title: 'Prime Ministerh',
    description: 'Lisa is a celebrated motivational speaker',
    image: './imgs/renzi.png',
  },
  {
    name: 'Ruth Porat',
    title: 'Senior',
    description: 'Lisa is a celebrated motivational speaker',
    image: './imgs/porat.png',
  },
];
const hambuger = document.querySelector('.div-logo');
const mobileMenu = document.querySelector('.mobile-menu');
const faMark = document.querySelector('.fa-xmark');
const lists = document.querySelectorAll('.na-list');
const speakerApp = document.querySelector('.speaker-container');
const moreSpeaker = document.querySelector('.more');
const navBar = document.querySelector('.navbar');

const openMenu = () => {
  mobileMenu.classList.add('active-menu');
};

const closeMenu = () => {
  mobileMenu.classList.remove('active-menu');
};

hambuger.addEventListener('click', openMenu);
faMark.addEventListener('click', closeMenu);
lists.forEach((list) => {
  list.addEventListener('click', closeMenu);
});

let elt = speakers.slice(0, 2);
const displaySpeaker = () => {
  elt.forEach((item) => {
    speakerApp.innerHTML += `
          <div class="speaker">
              <img src=${item.image} alt="">
              <div class="speaker-id">
                  <h3>${item.name}</h3>
                  <h4 id="job">${item.title}</h4>
                  <p>${item.description}</p>
              </div>
          </div>
      `;
  });
};

const loadMore = () => {
  if (document.querySelectorAll('.speaker').length < speakers.length) {
    elt = speakers.slice(2, speakers.length);
    displaySpeaker();
    moreSpeaker.innerHTML = 'Less <i class="fa fa-angle-up" aria-hidden="true">';
  } else {
    speakerApp.innerHTML = '';
    elt = speakers.slice(0, 2);
    displaySpeaker();
    moreSpeaker.innerHTML = 'More <i class="fa fa-angle-down" aria-hidden="true">';
  }
};

function myFunction(x) {
  if (x.matches) { // If media query matches
    speakerApp.innerHTML = '';
    elt = speakers.slice(0, 2);
    displaySpeaker();
    moreSpeaker.addEventListener('click', loadMore);
  } else {
    speakerApp.innerHTML = '';
    elt = speakers.slice(0, speakers.length);
    displaySpeaker();
  }
}

window.addEventListener('scroll', () => {
  navBar.classList.toggle('nav-border', window.scrollY > 0);
});

const x = window.matchMedia('(max-width: 768px)');
myFunction(x);
x.addListener(myFunction);
