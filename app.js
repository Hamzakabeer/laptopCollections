    const brandBtn = document.getElementById("brand-btn");
    const brandMenu = document.getElementById("brand-menu");
    const configBtn = document.getElementById("config-btn");
    const configMenu = document.getElementById("config-menu");
    
    const configurations = {
        "DELL": { "XPS 13": "xps13.jpg", "XPS 15": "xps15.jpg", "Inspiron 14": "inspiron14.jpg", "Inspiron 15": "inspiron15.jpg" },
        "HP": { "Pavilion 14": "pavilion14.jpg", "Pavilion 15": "pavilion15.jpg", "Spectre x360": "spectre.jpg", "Omen 16": "omen16.jpg" },
        "ROG": { "Zephyrus G14": "zephyrusg14.jpg", "Zephyrus G15": "zephyrusg15.jpg", "Strix Scar 17": "strixscar17.jpg", "Strix G16": "strixg16.jpg" },
        "LENOVO": { "ThinkPad X1": "thinkpadx1.jpg", "ThinkPad T14": "thinkpadt14.jpg", "Legion 5": "legion5.jpg", "Legion 7": "legion7.jpg" },
        "MACBOOK": { "MacBook Air M1": "mba_m1.jpg", "MacBook Air M2": "mba_m2.jpg", "MacBook Pro 14": "mbp14.jpg", "MacBook Pro 16": "mbp16.jpg" }
    };
    
    // Show/Hide Dropdown Menus
    document.querySelectorAll(".dropdown-btn").forEach(button => {
        button.addEventListener("click", function() {
            this.nextElementSibling.style.display = 
                this.nextElementSibling.style.display === "block" ? "none" : "block";
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener("click", function(event) {
        if (!event.target.matches(".dropdown-btn")) {
            document.querySelectorAll(".dropdown-menu").forEach(menu => {
                menu.style.display = "none";
            });
        }
    });
    
    // Brand Selection 
    brandMenu.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            let selectedBrand = event.target.getAttribute("data-brand");
            brandBtn.textContent = selectedBrand + " ▼";
    
            // Enable Config Dropdown
            configBtn.disabled = false;
            configBtn.textContent = "Configuration Select ▼";
    
            // Populate Config Dropdown
            configMenu.innerHTML = "";
            Object.keys(configurations[selectedBrand]).forEach(config => {
                let li = document.createElement("li");
                li.textContent = config;
                configMenu.appendChild(li);
            });
    
            // Store the selected brand in localStorage
            localStorage.setItem('selectedBrand', selectedBrand);
        }
    });
    
    // Config Selection
    configMenu.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            let selectedConfig = event.target.textContent;
            configBtn.textContent = selectedConfig + " ▼";
    
            let selectedBrand = localStorage.getItem('selectedBrand');
            let selectedImage = configurations[selectedBrand][selectedConfig]; // Get Image
    
            // Store data in localStorage
            localStorage.setItem('selectedConfig', selectedConfig);
            localStorage.setItem('selectedImage', selectedImage);
    
            // Redirect to the new page
            window.location.href = "tester.html";
        }
    });
    


// Search Function for Brand
function searchLaptop(event) {
    event.preventDefault(); // Form Submit Hone Se Rokna

    let searchInput = document.getElementById("searchInput").value.trim().toUpperCase();
    
    if (configurations[searchInput]) {
        // Save Brand in localStorage
        localStorage.setItem('searchedBrand', searchInput);

        // Redirect to Search Results Page
        window.location.href = "search.html";
    } else {
        alert("Brand not found! Please enter a valid brand.");
    }
}





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


document.addEventListener("DOMContentLoaded", function () {
   
    let categoryLinks = document.querySelectorAll(".dropdown-content a");

    categoryLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); 
            
            let category = this.getAttribute("data-category"); 
            
        
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



