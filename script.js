// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    document.body.style.overflow = navLinks.style.display === 'flex' ? 'hidden' : '';
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Account for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Add animation classes on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .step, .testimonial');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('animate-fade-in');
        }
    });
};

// Initial check on page load
window.addEventListener('load', animateOnScroll);

// Check on scroll
window.addEventListener('scroll', animateOnScroll);

// Handle responsive menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
});

// Add animation delay classes to elements
const addAnimationDelays = () => {
    const features = document.querySelectorAll('.feature-card');
    const steps = document.querySelectorAll('.step');
    
    features.forEach((feature, index) => {
        feature.classList.add(`delay-${index + 1}`);
    });
    
    steps.forEach((step, index) => {
        step.classList.add(`delay-${index + 1}`);
    });
};

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    addAnimationDelays();
    
    // Set initial state for mobile menu
    if (window.innerWidth <= 768) {
        navLinks.style.display = 'none';
    }
});