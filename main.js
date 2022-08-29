const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    // Get the current class
    const current = document.querySelector('.current');
    // Remove Current 
    current.classList.remove('current');
    // Check for next sibling
    if(current.nextElementSibling) {
        // Add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        // Add last to current
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
    
}

const prevSlide = () => {
    // Get Current Class
    const current = document.querySelector('.current');
    // Remove Current Class
    current.classList.remove('current');
    // check for prev slide
    if(current.previousElementSibling) {
        // Add current to previous sibling
        current.previousElementSibling.classList.add('current');

    } else {
        // Add current to last 
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));

}

// Buttons Events

next.addEventListener('click', e => {
    nextSlide();
});

prev.addEventListener('click', e => {
    prevSlide();
});

// Menu

const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');
const overlay   = document.querySelector('.overlay');

let scrollStarted = false;

menuBtn.addEventListener('click', navToggle);

function navToggle() {
    menuBtn.classList.toggle('open');
    sideMenu.classList.toggle('show');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('no-scroll');
    // overlay.classList.remove('overlay-show');
}


