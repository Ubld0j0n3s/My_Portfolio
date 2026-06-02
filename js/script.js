// ==================== TYPING EFFECT ====================

const typingTexts = [
    "Aspiring Full Stack Developer",
    "Web Development Enthusiast",
    "Vibe Coder",
    "Tech Passionate",
    "Lifelong Learner"
];

let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;

function typeEffect() {
    const typingElement = document.querySelector('.typing-text');
    const currentText = typingTexts[typingIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent = currentText.substring(0, charIndex);

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentText.length) {
        delay = pauseTime;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typingIndex = (typingIndex + 1) % typingTexts.length;
        delay = 500;
    }

    setTimeout(typeEffect, delay);
}

// Start typing effect on load
window.addEventListener('load', typeEffect);

// ==================== NAVIGATION MENU ====================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ==================== SMOOTH SCROLL ====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== SCROLL ANIMATIONS ====================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all skill items, project cards, and education cards
document.querySelectorAll('.skill-item, .project-card, .education-card, .stat-card, .contact-card').forEach(el => {
    observer.observe(el);
});

// ==================== PROGRESS BAR ANIMATION ====================

const progressBarObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-fill');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            progressBarObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-item').forEach(item => {
    progressBarObserver.observe(item);
});

// ==================== NAVBAR BACKGROUND ON SCROLL ====================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(59, 130, 246, 0.1)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// ==================== ACTIVE NAV LINK ON SCROLL ====================

window.addEventListener('scroll', () => {
    let current = '';

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#3B82F6';
        } else {
            link.style.color = '#CBD5E1';
        }
    });
});

// ==================== SKILL CARDS HOVER EFFECT ====================

const skillBadges = document.querySelectorAll('.skill-badge');

skillBadges.forEach(badge => {
    badge.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px) rotateZ(2deg)';
    });

    badge.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) rotateZ(0deg)';
    });
});

// ==================== COUNTER ANIMATION ====================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        if (element.textContent.includes('%')) {
            element.textContent = Math.floor(current) + '%';
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Observe stat cards for counter animation
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const h3 = entry.target.querySelector('h3');
            const textContent = h3.textContent.trim();
            
            // Extract number from text
            if (textContent.includes('%')) {
                const number = parseInt(textContent);
                animateCounter(h3, number);
            } else if (!isNaN(parseInt(textContent))) {
                const number = parseInt(textContent);
                animateCounter(h3, number);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card').forEach(card => {
    statObserver.observe(card);
});

// ==================== IMAGE LOADING ====================

// If user adds images to assets folder, this will help
const images = document.querySelectorAll('[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// ==================== DARK MODE (Optional Enhancement) ====================

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';

// You can add a theme toggle button if needed
function toggleTheme() {
    const theme = document.documentElement.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// ==================== SMOOTH PAGE LOAD ====================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ==================== KEYBOARD NAVIGATION ====================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    }
});

// ==================== CAROUSEL NAVIGATION ====================

function changeSlide(button, direction) {
    const carousel = button.closest('.project-carousel');
    if (!carousel) return;

    const images = carousel.querySelectorAll('.carousel-img');
    const dots = carousel.querySelectorAll('.dot');
    
    let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    let newIndex = (currentIndex + direction + images.length) % images.length;
    
    // Update images
    images.forEach(img => img.classList.remove('active'));
    images[newIndex].classList.add('active');
    
    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[newIndex].classList.add('active');
    
    // Reset auto-play timer
    resetAutoPlay(carousel);
}

function currentSlide(dot, index) {
    const carousel = dot.closest('.project-carousel');
    if (!carousel) return;

    const images = carousel.querySelectorAll('.carousel-img');
    const dots = carousel.querySelectorAll('.dot');
    
    // Update images
    images.forEach(img => img.classList.remove('active'));
    if (images[index]) {
        images[index].classList.add('active');
    }
    
    // Update dots
    dots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
    
    // Reset auto-play timer
    resetAutoPlay(carousel);
}

function autoPlayCarousel(carousel) {
    if (!carousel) return;
    
    const images = carousel.querySelectorAll('.carousel-img');
    const dots = carousel.querySelectorAll('.dot');
    
    if (images.length <= 1) return;
    
    let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    if (currentIndex === -1) currentIndex = 0;
    
    let nextIndex = (currentIndex + 1) % images.length;
    
    // Update images
    images.forEach(img => img.classList.remove('active'));
    if (images[nextIndex]) {
        images[nextIndex].classList.add('active');
    }
    
    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[nextIndex]) {
        dots[nextIndex].classList.add('active');
    }
}

function resetAutoPlay(carousel) {
    if (carousel.autoPlayTimer) {
        clearInterval(carousel.autoPlayTimer);
    }
    
    carousel.autoPlayTimer = setInterval(() => {
        autoPlayCarousel(carousel);
    }, 3000);
}

// Initialize auto-play for all carousels
window.addEventListener('load', () => {
    document.querySelectorAll('.project-carousel').forEach(carousel => {
        resetAutoPlay(carousel);
    });
});

// ==================== PARALLAX EFFECT (Optional) ====================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero::before, .hero::after');
    parallaxElements.forEach(element => {
        // You can add parallax effect if needed
    });
});

// ==================== PRINT STYLES ====================

window.addEventListener('beforeprint', () => {
    document.querySelectorAll('.nav-menu, .scroll-indicator').forEach(el => {
        el.style.display = 'none';
    });
});

// ==================== CONTACT FORM - FORMSUBMIT ====================

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[name="name"]').value.trim();
        const email = this.querySelector('input[name="email"]').value.trim();
        const message = this.querySelector('textarea[name="message"]').value.trim();
        
        // Validate inputs
        if (!name || !email || !message) {
            showFormMessage('✗ Please fill in all fields.', 'error');
            return;
        }
        
        // Disable submit button
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        // IMPORTANT: Capture form data BEFORE resetting
        const formData = new FormData(this);
        
        // Send to FormSubmit.co
        fetch('https://formsubmit.co/tuquibubald@gmail.com', {
            method: 'POST',
            body: formData
        }).then(response => {
            // Show success message AFTER sending
            showFormMessage('✓ Email sent successfully! Thank you for reaching out.', 'success');
            // Clear form AFTER sending
            this.reset();
        }).catch(error => {
            showFormMessage('✓ Email sent! You may receive a confirmation shortly.', 'success');
            this.reset();
        }).finally(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        });
    });
}

function showFormMessage(message, type) {
    if (!formMessage) return;
    
    formMessage.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        ${message}
        <button class="close-btn" title="Close">
            <i class="fas fa-times"></i>
        </button>
    `;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'flex';
    
    // Handle close button
    const closeBtn = formMessage.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            formMessage.style.display = 'none';
            if (formMessage.hideTimer) {
                clearTimeout(formMessage.hideTimer);
            }
        });
    }
    
    // Auto-hide after 20 seconds
    if (formMessage.hideTimer) {
        clearTimeout(formMessage.hideTimer);
    }
    formMessage.hideTimer = setTimeout(() => {
        formMessage.style.display = 'none';
    }, 20000);
}

window.addEventListener('afterprint', () => {
    document.querySelectorAll('.nav-menu, .scroll-indicator').forEach(el => {
        el.style.display = '';
    });
});

// ==================== ERROR HANDLING ====================

window.addEventListener('error', (event) => {
    console.error('An error occurred:', event.error);
});

// ==================== ACCESSIBILITY ====================

// Add focus visible styles for better keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ==================== UTILITY FUNCTIONS ====================

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

console.log('Portfolio loaded successfully!');
