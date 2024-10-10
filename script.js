document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const homeSection = document.getElementById('home');
    
    sections.forEach(section => section.style.display = 'none');
    homeSection.style.display = 'block';

    const navLinks = document.querySelectorAll('.main-nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                sections.forEach(section => section.style.display = 'none');
                targetSection.style.display = 'block';
            } else {
                console.error(`Section with ID "${targetId}" not found.`);
            }
        });
    });
});

// Function to reveal and hide emails
function revealEmail(id) {
    const emailElement = document.getElementById(id);
    emailElement.style.display = emailElement.style.display === 'none' ? 'inline' : 'none';
}

// Carousel functionality
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function moveSlide(n) {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + n + totalSlides) % totalSlides;
    slides[currentIndex].classList.add('active');
}

// Auto-slide functionality
function autoSlide() {
    moveSlide(1); // Move to the next slide
}

// Initialize first slide as active and start auto-slide
document.addEventListener('DOMContentLoaded', function() {
    slides[currentIndex].classList.add('active');
    setInterval(autoSlide, 10000);  // Every 10 seconds (10000ms)
});
