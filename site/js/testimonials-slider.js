/* ============================================
   BIX KURUMSAL — Testimonials Slider
   Single-card view with dots navigation
   ============================================ */

(function () {
    const viewport = document.getElementById('testimonialViewport');
    const prevBtn = document.getElementById('testimonialPrev');
    const nextBtn = document.getElementById('testimonialNext');
    const dotsContainer = document.getElementById('testimonialDots');

    if (!viewport || !prevBtn || !nextBtn || !dotsContainer) return;

    const cards = viewport.querySelectorAll('.testimonial-dark-card');
    const dots = dotsContainer.querySelectorAll('.testimonial-dot');
    let currentIndex = 0;
    const total = cards.length;

    function showCard(index) {
        // Remove active from all cards
        cards.forEach(function (card) {
            card.classList.remove('testimonial-dark-card--active', 'testimonial-dark-card--entering');
        });

        // Remove active from all dots
        dots.forEach(function (dot) {
            dot.classList.remove('testimonial-dot--active');
        });

        // Activate new card with animation
        currentIndex = index;
        cards[currentIndex].classList.add('testimonial-dark-card--active', 'testimonial-dark-card--entering');
        dots[currentIndex].classList.add('testimonial-dot--active');
    }

    // Arrow navigation
    nextBtn.addEventListener('click', function () {
        var next = (currentIndex + 1) % total;
        showCard(next);
    });

    prevBtn.addEventListener('click', function () {
        var prev = (currentIndex - 1 + total) % total;
        showCard(prev);
    });

    // Dot navigation
    dots.forEach(function (dot) {
        dot.addEventListener('click', function () {
            var index = parseInt(this.getAttribute('data-index'));
            if (index !== currentIndex) {
                showCard(index);
            }
        });
    });

    // Touch/swipe support
    var startX = 0;
    var threshold = 50;

    viewport.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
    }, { passive: true });

    viewport.addEventListener('touchend', function (e) {
        var diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Swiped left → next
                showCard((currentIndex + 1) % total);
            } else {
                // Swiped right → prev
                showCard((currentIndex - 1 + total) % total);
            }
        }
    }, { passive: true });

    // Smooth scroll for footer Referanslarımız link
    document.querySelectorAll('a[href="#testimonials"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.getElementById('testimonials');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
})();
