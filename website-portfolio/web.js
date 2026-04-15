let currentIndex = 0;
const slideContainer = document.getElementById('slide');
const navToggle = document.getElementById('nav-toggle');
const mobileNav = document.getElementById('mobile-nav');
let autoSlideInterval;

function updateSlide() {
    if (!slideContainer) return;
    slideContainer.style.transform = `translateX(-${currentIndex * 33.333}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % 3;
    updateSlide();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + 3) % 3;
    updateSlide();
}

function startAutoSlide() {
    stopAutoSlide();
    autoSlideInterval = setInterval(nextSlide, 5500);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

function closeMobileNav() {
    if (!mobileNav || !navToggle) return;
    mobileNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
}

function toggleMobileNav() {
    if (!mobileNav || !navToggle) return;
    const isOpen = mobileNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
}

function setupEventListeners() {
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const carousel = document.querySelector('.mouse');

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            nextSlide();
            startAutoSlide();
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            prevSlide();
            startAutoSlide();
        });
    }

    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoSlide);
        carousel.addEventListener('mouseleave', startAutoSlide);
    }

    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileNav);
    }

    if (mobileNav) {
        mobileNav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', closeMobileNav);
        });
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMobileNav();
        }
    });
}

function initCarousel() {
    setupEventListeners();
    startAutoSlide();
}

window.onload = initCarousel;