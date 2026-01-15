/**
 * User: Adam Ayman
 * Portfolio Script
 * Functionality: Theme Toggle, Mobile Menu, Scroll Animations
 */

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');
    const fadeElements = document.querySelectorAll('.fade-in');

    /* 
    ========================================
       THEME TOGGLE
    ========================================
    */
    // Check saved preference
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        updateThemeIcon(true);
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');

        // Update Icon
        updateThemeIcon(isLight);

        // Save Preference
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    function updateThemeIcon(isLight) {
        const icon = themeToggle.querySelector('i');
        if (isLight) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }

    /* 
    ========================================
       MOBILE MENU
    ========================================
    */
    mobileToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (navList.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                mobileToggle.querySelector('i').classList.remove('fa-times');
                mobileToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navList.contains(e.target) && !mobileToggle.contains(e.target) && navList.classList.contains('active')) {
            navList.classList.remove('active');
            mobileToggle.querySelector('i').classList.remove('fa-times');
            mobileToggle.querySelector('i').classList.add('fa-bars');
        }
    });

    /* 
    ========================================
       SCROLL ANIMATIONS
    ========================================
    */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        observer.observe(el);
    });
});
