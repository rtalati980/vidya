const logoContainer = document.querySelector('.logo-container');
let scrollAmount = 0;

function autoScroll() {
    scrollAmount += logoContainer.clientWidth / 3; // Scroll by 1/3 of container width
    if (scrollAmount >= logoContainer.scrollWidth) {
        scrollAmount = 0; // Reset scroll
    }
    logoContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

setInterval(autoScroll, 2000); // Change logos every 2 seconds
