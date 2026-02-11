console.log("%c CRSHINE GROUP %c Website Loaded ", "background: #000; color: #fff; font-size: 20px; font-weight: bold;", "background: linear-gradient(to right, #3b82f6, #8b5cf6); color: #fff; font-size: 20px;");

// Optional: Global interactions can go here
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
