// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Animate links
    navLinksItems.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Close mobile menu when clicking a link
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Add animation to sections on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    observer.observe(section);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add/remove scrolled class based on scroll position
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Hide/show header on scroll direction
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scrolling down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scrolling up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formObject);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Add animation to skills on scroll
const skillsSection = document.querySelector('.skills');
const skillTags = document.querySelectorAll('.skill-tag');

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            skillTags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.opacity = '1';
                    tag.style.transform = 'translateY(0)';
                }, 100 * index);
            });
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

if (skillsSection) {
    skillsObserver.observe(skillsSection);
    
    // Initial state for skill tags
    skillTags.forEach(tag => {
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(20px)';
        tag.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
}

// Add animation to project cards on scroll
const projectCards = document.querySelectorAll('.project-card');
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            projectObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    projectObserver.observe(card);
});

// Add animation to timeline items on scroll
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
            timelineObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = index % 2 === 0 ? 'translateX(-30px)' : 'translateX(30px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    timelineObserver.observe(item);
});

// Add animation to contact form on scroll
const contactFormElement = document.querySelector('.contact-form');
const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            contactObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

if (contactFormElement) {
    contactFormElement.style.opacity = '0';
    contactFormElement.style.transform = 'translateY(30px)';
    contactFormElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    contactObserver.observe(contactFormElement);
}

// Add active class to navigation links on scroll
const sectionsWithNav = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sectionsWithNav.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = `#${section.getAttribute('id')}`;
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === current) {
            link.classList.add('active');
        }
    });
});

// Add animation to hero content
const heroContent = document.querySelector('.hero-content');
if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(20px)';
    heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
    
    // Trigger animation after a short delay
    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 300);
}

// Add animation to scroll down arrow
const scrollDown = document.querySelector('.scroll-down');
if (scrollDown) {
    scrollDown.style.opacity = '0';
    scrollDown.style.transition = 'opacity 1s ease';
    
    // Show scroll down arrow after hero content animation
    setTimeout(() => {
        scrollDown.style.opacity = '1';
    }, 1500);
}

// Add loading animation
window.addEventListener('load', () => {
    // Remove loading class from body
    document.body.classList.add('loaded');
    
    // Add loaded class to hero content
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.classList.add('loaded');
    }
});
