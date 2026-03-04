/**
 * BIX KURUMSAL — Testimonial Slider
 * Simple vanilla JS slider for customer references
 */

document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.testimonial-slide');
    const dotsContainer = document.querySelector('.slider-dots');

    if (!sliderContainer || slides.length === 0) return;

    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoSlideInterval;

    // Hide all initially except first
    slides.forEach((slide, index) => {
        if (index !== 0) slide.style.display = 'none';

        // Create dot
        const dot = document.createElement('button');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');

        dot.addEventListener('click', () => {
            goToSlide(index);
            resetAutoSlide();
        });

        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.slider-dot');

    function goToSlide(index) {
        // Fade out current
        slides[currentSlide].style.opacity = '0';
        dots[currentSlide].classList.remove('active');

        setTimeout(() => {
            slides[currentSlide].style.display = 'none';

            // Update index
            currentSlide = index;

            // Fade in new
            slides[currentSlide].style.display = 'block';
            dots[currentSlide].classList.add('active');

            // Trigger reflow
            void slides[currentSlide].offsetWidth;

            slides[currentSlide].style.opacity = '1';
        }, 300); // match CSS transition time
    }

    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= totalSlides) next = 0;
        goToSlide(next);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000); // 5 seconds
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // Add base transition to all slides
    slides.forEach(slide => {
        slide.style.transition = 'opacity 0.3s ease-in-out';
    });

    // Touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    sliderContainer.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    sliderContainer.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const threshold = 50;
        if (touchEndX < touchStartX - threshold) {
            // Swipe Left -> Next
            nextSlide();
            resetAutoSlide();
        }
        if (touchEndX > touchStartX + threshold) {
            // Swipe Right -> Prev
            let prev = currentSlide - 1;
            if (prev < 0) prev = totalSlides - 1;
            goToSlide(prev);
            resetAutoSlide();
        }
    }

    // Start
    startAutoSlide();
});
