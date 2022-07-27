const speakers = [
    {
        name : 'Jonh Maxwell',
        title : 'Leadership Expert',
        description : `Maxwell bachelor's degree at Circleville Bible College in 1969`,
        image : './imgs/jonhmaxwell.png'
    },
    {
        name : 'Lisa Nichols',
        title : 'Transformational Speaker/Coach',
        description : `Lisa is a celebrated motivational speaker`,
        image : './imgs/lisanichols.jpeg'
    } ,
    {
        name : 'Mateo Renzi',
        title : 'Prime Ministerh',
        description : `Former Prime Minister, Italy`,
        image : './imgs/renzi.png'
    }
    ,
    {
        name : ' Noura Al Kaabi',
        title : 'Minister',
        description : `Minister of Culture and Youth, United Arab Emirates`,
        image : './imgs/noura.png'
    }
    ,
    {
        name : 'Patrice Caine',
        title : 'CEO',
        description : `Chairman and Chief Executive Officer, Thales`,
        image : './imgs/caine.png'
    }
    ,
    {
        name : 'Ruth Porat',
        title : 'Senior',
        description : `Senior Vice President and Chief Financial Officer, Alphabet and Google`,
        image : './imgs/porat.png'
    }
];
const hambuger = document.querySelector('.fa-bars');
const mobileMenu = document.querySelector('.mobile-menu');
const faMark = document.querySelector('.fa-xmark');
const lists = document.querySelectorAll('.na-list');
const speakerApp = document.querySelector('.speaker-container');
const moreSpeaker = document.querySelector('.more');

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

let elt = speakers.slice(0,2);
const loadMore = () => {
    if(document.querySelectorAll('.speaker').length < speakers.length) {
        elt = speakers.slice(2,speakers.length);
        displaySpeaker();
        moreSpeaker.innerHTML = `More <i class="fa fa-angle-up" aria-hidden="true">`; 
    } else {
        speakerApp.innerHTML = ''
        elt = speakers.slice(0,2);
        displaySpeaker();
        moreSpeaker.innerHTML = `More <i class="fa fa-angle-down" aria-hidden="true">`; 
    }
    
}

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
    `
    });
}
displaySpeaker();
moreSpeaker.addEventListener('click',loadMore); 



