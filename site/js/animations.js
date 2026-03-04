/**
 * BIX KURUMSAL — Animations Behavior
 * Intersection Observers for scroll reveal and number counting
 */

document.addEventListener('DOMContentLoaded', () => {
    // === Scroll Reveal Animation ===
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // === Number Counter Animation ===
    const statBoxes = document.querySelectorAll('.stat-box__number');
    let hasCounted = false;

    const countOptions = {
        threshold: 0.5
    };

    const countObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasCounted) {
                hasCounted = true;

                statBoxes.forEach(box => {
                    const target = parseInt(box.getAttribute('data-target'));
                    const duration = 2000; // 2 seconds
                    const increment = target / (duration / 16); // 60fps
                    let current = 0;

                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            box.innerText = Math.ceil(current) + '+';
                            requestAnimationFrame(updateCounter);
                        } else {
                            // Target reached, format with '+'
                            box.innerText = target + (box.getAttribute('data-plus') === 'false' ? '' : '+');
                        }
                    };

                    updateCounter();
                });

                observer.unobserve(entry.target);
            }
        });
    }, countOptions);

    // Unobserve wrapper instead of individual items if wrapped
    const statsSection = document.querySelector('#stats-section');
    if (statsSection) {
        countObserver.observe(statsSection);
    }
});
