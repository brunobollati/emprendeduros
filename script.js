document.addEventListener('DOMContentLoaded', () => {
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
});
