 // Smooth scroll function
 function scrollToContact() {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
}

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Navbar active state
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    document.addEventListener('DOMContentLoaded', () => {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        document.querySelector('#contact').style.paddingTop = `${navbarHeight}px`;
    });
    

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});