/**
 * BIX KURUMSAL — Navbar Behavior
 * Sticky header, mobile menu toggle, active state
 */

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const toggleBtn = document.querySelector('.navbar__toggle');
    const menu = document.querySelector('.navbar__menu');

    // Sticky Header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar--scrolled');
        } else {
            navbar.classList.remove('navbar--scrolled');
        }
    });

    // Mobile Menu Toggle
    if (toggleBtn && menu) {
        toggleBtn.addEventListener('click', () => {
            menu.classList.toggle('is-open');
            toggleBtn.classList.toggle('is-active');

            // Prevent body scroll when menu is open
            if (menu.classList.contains('is-open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking a link
        const links = menu.querySelectorAll('.navbar__link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('is-open');
                toggleBtn.classList.remove('is-active');
                document.body.style.overflow = '';
            });
        });
    }

    // Active state based on current page
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar__link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') !== '#' && currentPath.includes(link.getAttribute('href'))) {
            // For root index
            if (link.getAttribute('href') === 'index.html' && (currentPath.endsWith('/') || currentPath.endsWith('index.html'))) {
                link.classList.add('navbar__link--active');
            } else if (link.getAttribute('href') !== 'index.html') {
                link.classList.add('navbar__link--active');
            }
        }
    });
});
