const texts = [
    "Live Classes and class Recordingss",
    "Industry Expert interactions",
    "Placement Assistance"
  ];
  let index = 0;
  
  function changeTextWithHighlight() {
    const bannerText = document.getElementById('bannerText');
  
    // Add the highlight effect
    bannerText.classList.add('highlight');
    
    // Change the text
    bannerText.textContent = texts[index];
    index = (index + 1) % texts.length; // Loop through the text array
  
    // Remove the highlight after 0.5 seconds (for a smooth transition)
    setTimeout(() => {
      bannerText.classList.remove('highlight');
    }, 2000);
  }
  
  // Change text and highlight every second
  setInterval(changeTextWithHighlight, 2000);
 

  document.addEventListener("DOMContentLoaded", function () {
    const smBox = document.querySelector(".sm-box");
    const links = smBox.querySelectorAll("li a");

    links.forEach(link => {
        link.addEventListener("click", function () {
            // Toggle active class to expand/collapse
            smBox.classList.toggle("active");

            // Set the text for each icon
            const label = this.getAttribute("data-label");
            if (smBox.classList.contains("active")) {
                // Show label next to the icon when active
                this.parentElement.style.opacity = '1';
                this.parentElement.style.transform = 'translateX(0)';
                this.insertAdjacentHTML('beforeend', `<span class="label">${label}</span>`);
            } else {
                // Remove label when not active
                const span = this.parentElement.querySelector('.label');
                if (span) {
                    span.remove();
                }
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll("h3[data-target]");
    
    const animateCounter = (counter) => {
      const target = +counter.getAttribute("data-target");
      const speed = 200; // Adjust speed as needed
      const increment = target / speed;
  
      const updateCounter = () => {
        const current = +counter.innerText;
  
        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCounter, 20);
        } else {
          counter.innerText = target; // Ensure it ends exactly at the target
        }
      };
  
      updateCounter();
    };
  
    counters.forEach(counter => {
      animateCounter(counter);
    });
  });
  

  const carousel = document.getElementById("teachers-carousel");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  
  // Calculate the width of a single teacher card
  const cardWidth = document.querySelector(".teacher-card").offsetWidth + 20; // includes margin
  
  // Function to scroll carousel left
  function scrollLeft() {
    carousel.scrollBy({
      left: -cardWidth,
      behavior: "smooth"
    });
  }
  
  // Function to scroll carousel right
  function scrollRight() {
    carousel.scrollBy({
      left: cardWidth,
      behavior: "smooth"
    });
  }
  
  // Event listeners for buttons
  prevBtn.addEventListener("click", scrollLeft);
  nextBtn.addEventListener("click", scrollRight);
  