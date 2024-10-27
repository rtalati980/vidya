document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll('[data-target]');

  const animateCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const increment = Math.ceil(target / 100); // Speed of counting

      let count = 0;
      const updateCounter = () => {
        count += increment;
        if (count < target) {
          counter.textContent = count;
          setTimeout(updateCounter, 10); // Adjust timing for smoothness
        } else {
          counter.textContent = target; // Ensure it reaches the target
        }
      };
      updateCounter();
    });
  };

  // Start the animation when the element is in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  });

  counters.forEach(counter => {
    observer.observe(counter); // Observe each counter
  });
});




//

$(document).ready(function() {

  $(`[unique-script-id="w-w-dm-id"] .btn-box`).click(function() {
    $(this).parent().children(".overlay").show();

  });


  $(`[unique-script-id="w-w-dm-id"] .close`).click(function() {
    $(`[unique-script-id="w-w-dm-id"] .overlay`).hide();
  });
});
