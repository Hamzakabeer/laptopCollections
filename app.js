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

document.addEventListener("DOMContentLoaded", function () {
    // Get all dropdown links
    let categoryLinks = document.querySelectorAll(".dropdown-content a");

    categoryLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Stop default action
            
            let category = this.getAttribute("data-category"); // Get category name
            
            // Redirect to category page with query string
            window.location.href = `category.html?category=${category}`;
        });
    });
});

alert("Welcome Our Website");

document.getElementById("popupunderconstruct-cart").onclick = function() {
    alert("shopping cart feature on a website is currently unavailable");
};
document.getElementById("popupunderconstruct-slider-items").onclick = function() {
    alert("temporarily unavailable for updates, repairs, or improvements");
};
document.getElementById("popupunderconstruct-currency").onclick = function() {
    alert("UpComing Soon");
};
document.getElementById("popupunderconstruct-search").onclick = function() {
    alert("!!! Warning");
};



document.getElementById("signup-btn").addEventListener("click", function() {
    var email = document.getElementById("email").value;
    
    if (email === "") {
        alert("Please enter your email address.");
        return;
    }

    var subject = "Sign Up for Latest Deals";
    var body = "Hello,\n\nI want to sign up for the latest deals. My email: " + email;
    window.location.href = "mailto:someone@example.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
});
