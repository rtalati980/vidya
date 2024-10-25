// Function to animate the counters



const counters = document.querySelectorAll('.counter');

function startCounter() {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target'); // Get the target number
        let count = 0; // Initialize the count

        const speed = 2000; // Duration of the animation in milliseconds
        const increment = target / speed * 100; // Calculate the increment

        const updateCount = () => {
            count += increment; // Increment the count
            if (count < target) {
                counter.textContent = Math.floor(count); // Update the displayed number
                requestAnimationFrame(updateCount); // Call updateCount again for the next frame
            } else {
                counter.textContent = target; // Ensure the counter displays the target number
            }
        };

        updateCount(); // Start the animation
    });
}

// Start the counter when the page is loaded
window.onload = () => {
    startCounter();
};


document.addEventListener('DOMContentLoaded', () => {
    // Tab switching logic
    const tabs = document.querySelectorAll('.tabs li');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active')); // Remove 'active' class from all tabs
            tab.classList.add('active'); // Add 'active' class to the clicked tab

            const target = tab.getAttribute('data-tab'); // Get the target tab content

            // Show the selected tab content and hide others
            tabContents.forEach(content => {
                content.style.display = content.id === target ? 'block' : 'none';
            });
        });
    });
})
  