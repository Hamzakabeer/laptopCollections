document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.caraousel-slider-main');
    const dots = document.querySelectorAll('.dot');
    const prev = document.querySelector('.carousel-arrow-main.left');
    const next = document.querySelector('.carousel-arrow-main.right');

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            dots[i].classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });
    
    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);

    setInterval(nextSlide, 5000);  
});





const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.carousel-indicators div');
const leftArrow = document.querySelector('.carousel-arrow.left');
const rightArrow = document.querySelector('.carousel-arrow.right');

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * (carouselItems[0].offsetWidth + 30);
    carouselContainer.style.transform = `translateX(${offset}px)`;
    
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
    updateCarousel();
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

indicators.forEach(indicator => {
    indicator.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.getAttribute('data-index'));
        updateCarousel();
    });
});

window.addEventListener('resize', updateCarousel);

updateCarousel();


// let eliteLaptopsCollections = {
//     laptopName: "ASUS ROG",
//     laptopColor: ["Black","Grey","Red&Green"],
//     laptopModelNum: "Rog Strix G18",

// }

// let search = prompt("Enter your collections");

// console.log([eliteLaptopsCollections[search]]);