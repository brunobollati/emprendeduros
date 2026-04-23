document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const button = item.querySelector('.faq-question');
        button.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Smooth Scrolling for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple Form Submission Prevent Default
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por tu postulación! Nos pondremos en contacto pronto.');
            form.reset();
        });
    }

    // Header Blur Effect on Scroll
    const header = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Rotating Text
    const rotatingText = document.getElementById('rotating-text');
    if (rotatingText) {
        const words = ['tu futuro.', 'emprendeduros.', 'fondo tokenizado.'];
        let currentIndex = 0;

        setInterval(() => {
            rotatingText.style.opacity = 0;
            
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % words.length;
                rotatingText.textContent = words[currentIndex];
                rotatingText.style.opacity = 1;
            }, 300);
        }, 2000);
    }

    // Number Counter Animation
    const countElements = document.querySelectorAll('.count');
    
    if (countElements.length > 0) {
        const animateCounts = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.getAttribute('data-target'));
                    const duration = 1500; // 1.5 seconds
                    const frameDuration = 1000 / 60; // 60fps
                    const totalFrames = Math.round(duration / frameDuration);
                    let frame = 0;
                    
                    const easeOutQuad = t => t * (2 - t);
                    
                    const counter = setInterval(() => {
                        frame++;
                        const progress = easeOutQuad(frame / totalFrames);
                        const currentCount = Math.round(target * progress);
                        
                        el.textContent = currentCount;
                        
                        if (frame >= totalFrames) {
                            clearInterval(counter);
                            el.textContent = target;
                        }
                    }, frameDuration);
                    
                    observer.unobserve(el);
                }
            });
        };
        
        const observer = new IntersectionObserver(animateCounts, {
            threshold: 0.1
        });
        
        countElements.forEach(el => observer.observe(el));
    }

    // Scroll Animation Observer
    const scrollElements = document.querySelectorAll('.scroll-animate');
    
    if (scrollElements.length > 0) {
        const scrollObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        scrollElements.forEach(el => scrollObserver.observe(el));
    }
});
