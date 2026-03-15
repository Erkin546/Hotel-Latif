let currentSlide = 0;
const slidesContainer = document.getElementById('slides'),
slides = document.querySelectorAll('.slide'),
totalSlides = slides.length,
dotsContainer = document.getElementById('sliderDots');

function createDots() {
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.className = `dot ${i === 0 ? 'active' : ''}`;
        dot.onclick = () => goToSlide(i);
        dotsContainer.appendChild(dot);
    }
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.className = `dot ${index === currentSlide ? 'active' : ''}`;
    });
}

function goToSlide(index) {
    currentSlide = index;
    const offset = currentSlide * -100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
    updateDots();
}

function moveSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    goToSlide(currentSlide);
}

createDots();


function switchLanguage(lang, event) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    if (event) {
        event.target.classList.add('active');
    }
    
    document.querySelectorAll(`[data-${lang}]`).forEach(element => {

        const tags = ['DIV', 'P', 'H1', 'SPAN', 'EM', 'STRONG', 'B'];
        if (tags.includes(element.tagName) || element.classList.contains('badge')) {
            element.textContent = element.getAttribute(`data-${lang}`);
        }
    });


    const description = document.querySelector('.description-text');
    if (description) {
        description.style.opacity = '0.5';
        setTimeout(() => {
            description.style.opacity = '1';
        }, 200);
    }
}

let touchStartX = 0;
let touchEndX = 0;

slidesContainer.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

slidesContainer.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            moveSlide(1);
        } else {
            moveSlide(-1);
        }
    }
}    