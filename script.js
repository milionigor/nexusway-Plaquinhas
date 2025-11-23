document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Menu Mobile ---
    const mobileBtn = document.getElementById('mobile-toggle');
    const navMenu = document.querySelector('.menu-list');

    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Troca ícone (Bars <-> Times)
            const icon = mobileBtn.querySelector('i');
            if(navMenu.classList.contains('active')){
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Fecha menu ao clicar em um link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = mobileBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // --- 2. Animação de Scroll (Fade Up) ---
    const observerOptions = {
        threshold: 0.1, // 10% do elemento visível
        rootMargin: "0px 0px -50px 0px" // Dispara um pouco antes
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Para de observar depois de animar
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach(el => observer.observe(el));

    // --- 3. Header Transparente -> Sólido ao rolar ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            header.style.background = "rgba(5, 5, 5, 0.98)";
            header.style.boxShadow = "0 2px 20px rgba(0,0,0,0.5)";
        } else {
            header.style.background = "rgba(20, 20, 20, 0.8)";
            header.style.boxShadow = "none";
        }
    });

});