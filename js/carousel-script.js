document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const selectorButtons = document.querySelectorAll('.carousel-selector-button');
    let currentIndex = 0;
    let slideInterval;

    // Function to change the slide
    function changeSlide(newIndex) {
        carouselItems[currentIndex].classList.remove('active');
        selectorButtons[currentIndex].classList.remove('active');

        carouselItems[newIndex].classList.add('active');
        selectorButtons[newIndex].classList.add('active');

        currentIndex = newIndex;
    }

    // Function to set up the automatic slide movement
    function setupAutoSlide() {
        if (slideInterval) {
            clearInterval(slideInterval);
        }

        slideInterval = setInterval(() => {
            let nextIndex = (currentIndex + 1) % carouselItems.length;
            changeSlide(nextIndex);
        }, 5000);
    }

    // Initial setup of the automatic slide movement
    setupAutoSlide();

    // Manual slide movement through selector buttons
    selectorButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            changeSlide(index);
            setupAutoSlide();
        });
    });
});