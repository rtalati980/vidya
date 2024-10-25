const youtubeVideos = [
    "https://youtu.be/OvKTGhN3oXg",
    "https://youtu.be/IMlRGR-mcGg",
    "https://youtu.be/w0AQfHnuRMU",
    "https://youtu.be/GgIZfSrFKZA",
    "https://youtu.be/LEJpV9aldnY"
];

const videoCarouselWrapper = document.getElementById('videoCarouselWrapper');

// Function to convert the YouTube URL to embed URL
function getYouTubeEmbedUrl(videoURL) {
    const videoId = videoURL.split('youtu.be/')[1] || videoURL.split('v=')[1];
    return `https://www.youtube.com/embed/${videoId}`;
}

// Dynamically generate video cards using YouTube embed URLs
function createYouTubeVideoCarousel(videos) {
    videos.forEach(videoURL => {
        const embedURL = getYouTubeEmbedUrl(videoURL);
        const videoCard = document.createElement('div');
        videoCard.classList.add('youtube-video-card');
        videoCard.innerHTML = `<iframe src="${embedURL}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        videoCarouselWrapper.appendChild(videoCard);
    });
}

// Call the function to populate the carousel with videos
createYouTubeVideoCarousel(youtubeVideos);

let videoCurrentPosition = 0;
const totalYouTubeVideos = youtubeVideos.length;
const visibleYouTubeVideos = 3; // Now displaying 3 visible videos

// Function to update the carousel position
function updateYouTubeCarousel() {
    const newYouTubePosition = -(videoCurrentPosition * 100 / visibleYouTubeVideos);
    videoCarouselWrapper.style.transform = `translateX(${newYouTubePosition}%)`;
}

// Left arrow click event for video carousel
document.getElementById('videoPrevBtn').addEventListener('click', () => {
    videoCurrentPosition = (videoCurrentPosition === 0) ? totalYouTubeVideos - visibleYouTubeVideos : videoCurrentPosition - 1;
    updateYouTubeCarousel();
});

// Right arrow click event for video carousel
document.getElementById('videoNextBtn').addEventListener('click', () => {
    videoCurrentPosition = (videoCurrentPosition === totalYouTubeVideos - visibleYouTubeVideos) ? 0 : videoCurrentPosition + 1;
    updateYouTubeCarousel();
});

// Auto swipe function for YouTube carousel
function autoSwipeYouTubeCarousel() {
    videoCurrentPosition = (videoCurrentPosition === totalYouTubeVideos - visibleYouTubeVideos) ? 0 : videoCurrentPosition + 1;
    updateYouTubeCarousel();
}

// Auto swipe interval every 3 seconds for video carousel
setInterval(autoSwipeYouTubeCarousel, 3000);



let currentIndex = 0;

function moveCarousel(direction) {
  const reviews = document.querySelectorAll('.review');
  const totalReviews = reviews.length;

  // Update the current index based on direction
  currentIndex += direction;

  // Wrap around the carousel
  if (currentIndex < 0) {
    currentIndex = Math.floor(totalReviews / 3) * 3 - 3;
  } else if (currentIndex >= totalReviews) {
    currentIndex = 0;
  }

  // Calculate the new position
  const carouselContainer = document.querySelector('.carousel-container');
  carouselContainer.style.transform = `translateX(-${(currentIndex / 3) * 100}%)`;
}




//teacher

const teachersCarousel = document.getElementById('teachers-carousel');
const nextButton = document.getElementById('next-btn');
const prevButton = document.getElementById('prev-btn');

let currentIndex1 = 0;
const cardWidth = 270; // Width of each card including margin (250px + 20px margin)
const visibleCards = 3; // Adjust according to screen size

nextButton.addEventListener('click', () => {
  if (currentIndex < teachersCarousel.children.length - visibleCards) {
    currentIndex1++;
    updateCarousel();
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex1 > 0) {
    currentIndex1--;
    updateCarousel();
  }
});

function updateCarousel() {
  const offset = -currentIndex1 * cardWidth;
  teachersCarousel.style.transform = `translateX(${offset}px)`;
}





let currentIndex2 = 0;
const visibleImages = 4; // Number of images visible at a time
const totalImages = document.querySelectorAll('.carousel-card').length;

// Function to update carousel position
function updateCarousel() {
    const offset = -(currentIndex2 * 100 / visibleImages);
    document.querySelector('.carousel-wrapper').style.transform = `translateX(${offset}%)`;
}

// Event listeners for carousel navigation
document.getElementById('carouselPrevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex2 === 0) ? totalImages - visibleImages : currentIndex2 - 1;
    updateCarousel();
});

document.getElementById('carouselNextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex2 === totalImages - visibleImages) ? 0 : currentIndex2 + 1;
    updateCarousel();
});
