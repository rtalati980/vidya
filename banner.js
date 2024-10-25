let currentSlide = 0;
const slides = document.querySelectorAll('.hero-bann');
const totalSlides = slides.length;

// Function to move slides
function moveSlide(direction) {
    // Hide current slide
    slides[currentSlide].classList.remove('active');

    // Update current slide index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Show new slide
    slides[currentSlide].classList.add('active');
}

// Automatically change slides every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000); // Change the slide every 5 seconds

// Initialize carousel by showing the first slide
slides[currentSlide].classList.add('active');



let currentSlide2 = 0;
const slides2 = document.querySelectorAll('.hero-bann');

function moveSlide(direction) {
    slides[currentSlide].classList.remove('active'); // Hide current slide
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Wrap to last slide
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; // Wrap to first slide
    }

    slides[currentSlide].classList.add('active'); // Show next slide

    // Update background and overlay color
    const currentBanner = slides[currentSlide];
    const overlayColor = currentBanner.dataset.overlay; // Set a data attribute for overlay color
    currentBanner.querySelector('::before').style.backgroundColor = overlayColor;
}

// Initial setup
function initCarousel() {
    slides[currentSlide].classList.add('active');
}

// Call init function on page load
initCarousel();
