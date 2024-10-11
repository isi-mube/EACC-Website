document.addEventListener('DOMContentLoaded', function() {

    // Hamburger menu toggle for mobile
    function toggleMenu() {
        const nav = document.querySelector('.main-nav ul');
        nav.classList.toggle('show');
    }
    window.toggleMenu = toggleMenu;

    // Section navigation functionality
    const sections = document.querySelectorAll('section');
    const homeSection = document.getElementById('home');

    // Initially hide all sections except the home section
    sections.forEach(section => section.style.display = 'none');
    homeSection.style.display = 'block';

    const navLinks = document.querySelectorAll('.main-nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                sections.forEach(section => section.style.display = 'none');
                targetSection.style.display = 'block';
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Email reveal functionality
    document.querySelectorAll('.email-button').forEach(button => {
        button.addEventListener('click', function() {
            const emailId = this.getAttribute('data-email-id');
            const emailElement = document.getElementById(emailId);
            if (emailElement) {
                emailElement.style.display = emailElement.style.display === 'none' ? 'inline' : 'none';
            }
        });
    });

    // Function to reveal and hide emails
    function revealEmail(id) {
        const emailElement = document.getElementById(id);
        emailElement.style.display = emailElement.style.display === 'none' ? 'inline' : 'none';
    }
    window.revealEmail = revealEmail;

    // Carousel functionality
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    // Function to move to the next or previous slide
    function moveSlide(direction) {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
        slides[currentIndex].classList.add('active');
    }

    // Auto-slide functionality
    let autoSlideInterval = setInterval(function() {
        moveSlide(1);
    }, 10000);

    // Manual control for previous and next buttons
    document.querySelector('.carousel-control.prev').addEventListener('click', function() {
        clearInterval(autoSlideInterval);
        moveSlide(-1);
        restartAutoSlide();
    });

    document.querySelector('.carousel-control.next').addEventListener('click', function() {
        clearInterval(autoSlideInterval);
        moveSlide(1);
        restartAutoSlide();
    });

    // Restart auto-slide after user interaction
    function restartAutoSlide() {
        autoSlideInterval = setInterval(function() {
            moveSlide(1);
        }, 10000);
    }

    // Initialize the first slide as active
    slides[currentIndex].classList.add('active');
});