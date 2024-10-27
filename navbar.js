// Function to dynamically render the navbar
// Slide-in effect on mobile

  


function createNavbar(menuItems) {
    const navbar = document.getElementById('navbar');

    menuItems.forEach(item => {
        // Create dropdown container
        const dropdown = document.createElement('div');
        dropdown.classList.add('dropdown');
        
        // Create button for the dropdown
        const button = document.createElement('button');
        button.classList.add('dropbtn');
        button.innerHTML = `<i class="${item.icon}"></i><div class="nav-tex"> ${item.title}</div>` + ' <i class="fa fa-caret-down"></i>';
        dropdown.appendChild(button);

        // Create the dropdown content
        const dropdownContent = document.createElement('div');
        dropdownContent.classList.add('dropdown-content');

        // Create the links for each dropdown
        item.links.forEach(linkText => {
            const link = document.createElement('a');
            link.href = "#";
            link.textContent = linkText;
            dropdownContent.appendChild(link);
        });

        dropdown.appendChild(dropdownContent);
        navbar.appendChild(dropdown);
    });
}

// Call the function to create the navbar on page load


const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


const banner = document.querySelector('.banner'); // Select the banner element
const mainHeader = document.getElementById('mainHeader'); // Select the main header element

window.addEventListener('scroll', () => {
    if (window.scrollY > banner.offsetHeight) {
        // Hide the banner
        banner.classList.add('hidden'); // Add hidden class to hide the banner
        // Show the main header (it is already fixed, no need to do anything else)
    } else {
        // Show the banner
        banner.classList.remove('hidden'); // Remove hidden class to show the banner
    }
});