// Course Data
const courses = [
    { title: "Accounts Books – An Introduction", duration: 4, credits: 1, price: 2949, discountedPrice: 2066, image: "./asset/bookeeping.png" },
    { title: "Salary & Statutory Compliance", duration: 4, credits: 1, price: 2949, discountedPrice: 2066, image: "./asset/salary.png" },
    { title: "Inventory & Stock Operation", duration: 4, credits: 1, price: 3999, discountedPrice: 2799, image: "./asset/inventory.png" },
    { title: "Book Keeping / Accounting", duration: 4,credits: 1, price: 4999, discountedPrice: 3599, image: "./asset/bookeeping.png" },
    { title: "Purchase & Procurements", duration: 4, credits: 1, price: 2699, discountedPrice: 1899, image: "course5.jpg" },
    { title: "Finalisations of Accounting", duration: 4, credits: 1, price: 2699, discountedPrice: 1899, image: "course5.jpg" },
    { title: "Business & Industrial Accounting", duration: 3, credits: 11, price: 2699, discountedPrice: 1899, image: "course5.jpg" },
    { title: "Financial Management & Financial Analysis", duration: 12, credits: 1, price: 6549, discountedPrice: 4802, image: "course5.jpg" },
    // Add more courses as needed
];

const courses2 = [
    { title: "Career Starter - Effective Communication", duration: 4, lessons: 1, price: 2949, discountedPrice: 2066, image: "course1.jpg" },
    { title: "Career Enhancer - Time Management", duration: 6, lessons: 2, price: 3499, discountedPrice: 2399, image: "course2.jpg" },
    { title: "Career Enhancer - Problem Solving", duration: 5, lessons: 2, price: 3999, discountedPrice: 2799, image: "course3.jpg" },
    { title: "Book Keeping / AccountingCareer Enhancer - Mastering Leadership and Team Dynamics", duration: 8, lessons: 3, price: 4999, discountedPrice: 3599, image: "course4.jpg" },
    { title: "Career Readiness - Interview Skill", duration: 3, lessons: 1, price: 2699, discountedPrice: 1899, image: "course5.jpg" },
    { title: "Career Readiness - Interview Skill", duration: 3, lessons: 1, price: 2699, discountedPrice: 1899, image: "course5.jpg" },
    { title: "Career Excellence – Essential Skills for Success", duration: 3, lessons: 1, price: 2699, discountedPrice: 1899, image: "course5.jpg" },
    // Add more courses as needed
];
const courses3 = [
    { title: "Spoken English – Beginner’s Guide", duration: 4, lessons: 1, price: 2949, discountedPrice: 2066, image: "course1.jpg" },
    { title: "Spoken English – Advance Level", duration: 6, lessons: 2, price: 3499, discountedPrice: 2399, image: "course2.jpg" },
    { title: "Spoken English - Beginner’s + Advance Level", duration: 5, lessons: 2, price: 3999, discountedPrice: 2799, image: "course3.jpg" },
    { title: "French Language", duration: 8, lessons: 3, price: 4999, discountedPrice: 3599, image: "course4.jpg" },
    { title: "German Language", duration: 3, lessons: 1, price: 2699, discountedPrice: 1899, image: "course5.jpg" },
    { title: "Persian Language", duration: 3, lessons: 1, price: 2699, discountedPrice: 1899, image: "course5.jpg" },
   
    // Add more courses as needed
];
const courses4 = [
    { title: "Data Analysis with R Programming – Beginner’s Level", duration: 4, lessons: 1, price: 2949, discountedPrice: 2066, image: "course1.jpg" },
    { title: "Data Analysis with R Programming – Advance Level", duration: 6, lessons: 2, price: 3499, discountedPrice: 2399, image: "course2.jpg" },
    { title: "Data Analytics with SQL & ETL Tool", duration: 5, lessons: 2, price: 3999, discountedPrice: 2799, image: "course3.jpg" },
    { title: "Machine Learning with Python", duration: 8, lessons: 3, price: 4999, discountedPrice: 3599, image: "course4.jpg" },
    { title: "SQL Essentials for data Analytics", duration: 3, lessons: 1, price: 2699, discountedPrice: 1899, image: "course5.jpg" },
    { title: "ERP Operation and Implementation", duration: 3, lessons: 1, price: 2699, discountedPrice: 1899, image: "course5.jpg" },
    { title: "Software Designing and Coding", duration: 3, lessons: 1, price: 2699, discountedPrice: 1899, image: "course5.jpg" }
    // Add more courses as needed
];

const courses5 = [
    { title: "Information Technology ( IT)", duration: 4, lessons: 1, price: 2949, discountedPrice: 2066, image: "course1.jpg" },
    { title: "Accounts & Finance ", duration: 6, lessons: 2, price: 3499, discountedPrice: 2399, image: "course2.jpg" },
    { title: "Management ", duration: 5, lessons: 2, price: 3999, discountedPrice: 2799, image: "course3.jpg" },
    { title: "Pharmaceuticals", duration: 8, lessons: 3, price: 4999, discountedPrice: 3599, image: "course4.jpg" }
];

const courses7 = [
    { title: "Machine Learning with python", duration: 4, lessons: 1, price: 2949, discountedPrice: 2066, image: "./asset/mchinelear.png" },
    { title: "Industrial Training in Web Designing", duration: 6, lessons: 2, price: 3499, discountedPrice: 2399, image: "./asset/induweb.png" },
    { title: "Industrial Training in Software Designing & Coding", duration: 5, lessons: 2, price: 3999, discountedPrice: 2799, image: "./asset/code.png" },
    { title: "Data Visualization with Power BI", duration: 8, lessons: 3, price: 4999, discountedPrice: 3599, image: "./asset/power-BI.png" },
    { title: "Data Visualization with Tableau", duration: 3, lessons: 1, price: 2699, discountedPrice: 1899, image: "course5.jpg" }  
    // Add more courses as needed
];

const courses8 = [
    { title: "Career Starter - Effective Communication", duration: 4, lessons: 1, price: 2949, discountedPrice: 2066, image: "course1.jpg" },
    { title: "Career Enhancer - Time Management", duration: 6, lessons: 2, price: 3499, discountedPrice: 2399, image: "course2.jpg" },
    { title: "Career Enhancer - Problem Solving", duration: 5, lessons: 2, price: 3999, discountedPrice: 2799, image: "course3.jpg" },
    { title: "Career Enhancer - Mastering Leadership and Team Dynamics", duration: 8, lessons: 3, price: 4999, discountedPrice: 3599, image: "course4.jpg" },
    { title: "Career Readiness - Interview Skill", duration: 3, lessons: 1, price: 2699, discountedPrice: 1899, image: "course5.jpg" },
    { title: "Career Starter - Public Speaking & Confidence Building", duration: 8, lessons: 3, price: 4999, discountedPrice: 3599, image: "course4.jpg" },
    { title: "Career Excellence – Essential Skills for Success", duration: 3, lessons: 1, price: 2699, discountedPrice: 1899, image: "course5.jpg" }    
    // Add more courses as needed
];


const courses9 = [
    { title: "Mastery in MS Office", duration: 4, lessons: 1, price: 2949, discountedPrice: 2066, image: "course1.jpg" },
    { title: "Mastery in MS Excel ", duration: 6, lessons: 2, price: 3499, discountedPrice: 2399, image: "course2.jpg" },
    { title: "Hand on Training on Canva", duration: 5, lessons: 2, price: 3999, discountedPrice: 2799, image: "course3.jpg" },
    { title: "Mastery in Power Point Presentation", duration: 8, lessons: 3, price: 4999, discountedPrice: 3599, image: "course4.jpg" },
    { title: "Mastery in Computer Skills", duration: 3, lessons: 1, price: 2699, discountedPrice: 1899, image: "course5.jpg" },
    { title: "Training on Future Skills in IT and Cyber Security", duration: 8, lessons: 3, price: 4999, discountedPrice: 3599, image: "course4.jpg" }
    // Add more courses as needed
];

const courses10 = [
    { title: "Office Administration Management", duration: 4, lessons: 1, price: 2949, discountedPrice: 2066, image: "course1.jpg" },
    { title: "Reception & Front Desk Mastery  ", duration: 6, lessons: 2, price: 3499, discountedPrice: 2399, image: "course2.jpg" }
    // Add more courses as needed
];

const courses11 = [
    { title: "Departmental Association in Industries", duration: 4, lessons: 1, price: 2949, discountedPrice: 2066, image: "course1.jpg" },
    { title: "Role of Inventory Controls in Industries ", duration: 6, lessons: 2, price: 3499, discountedPrice: 2399, image: "course2.jpg" },
    { title: "Human Recourse, Welfare & their Compliances", duration: 5, lessons: 2, price: 3999, discountedPrice: 2799, image: "course3.jpg" },
    { title: "Role of MSME Units in our Industries", duration: 8, lessons: 3, price: 4999, discountedPrice: 3599, image: "course4.jpg" },
    { title: "Importance of Capital Assets in Industries", duration: 3, lessons: 1, price: 2699, discountedPrice: 1899, image: "course5.jpg" },
    { title: "Finance and Inventory", duration: 8, lessons: 3, price: 4999, discountedPrice: 3599, image: "course4.jpg" }
    // Add more courses as needed
];

const courses12 = [
    { title: "Machine Learning with Python", duration: 4, lessons: 1, price: 2949, discountedPrice: 2066, image: "course1.jpg" },
    { title: "Training on Live IT Project ", duration: 6, lessons: 2, price: 3499, discountedPrice: 2399, image: "course2.jpg" },
    { title: "Data Visualization with Power BI", duration: 5, lessons: 2, price: 3999, discountedPrice: 2799, image: "course3.jpg" },
    { title: "Data Visualization with Tableau", duration: 8, lessons: 3, price: 4999, discountedPrice: 3599, image: "course4.jpg" }
    // Add more courses as needed
];

const courses13 = [
    { title: "Departmental Association in Industries ", duration: 4, lessons: 1, price: 2949, discountedPrice: 2066, image: "course1.jpg" },
    { title: "Role of Inventory Controls in Industries ", duration: 6, lessons: 2, price: 3499, discountedPrice: 2399, image: "course2.jpg" },
    { title: "Human Resource, Welfare and their Compliances", duration: 5, lessons: 2, price: 3999, discountedPrice: 2799, image: "course3.jpg" },
    { title: "Finance and Inventory ", duration: 8, lessons: 3, price: 4999, discountedPrice: 3599, image: "course4.jpg" }
    // Add more courses as needed
];


const courses14 = [
    { title: "Course On Computer Concept ( CCC )", duration: 2, price: 2400, discountedPrice: 2400, image: "course1.jpg" },
    { title: "Diploma In IT ( Equivalent to O’level ) ", duration: 1, price: 8500, discountedPrice: 8500, image: "course2.jpg" }
    // Add more courses as needed
];
const courseWrapper1 = document.getElementById('courseWrapper1');
const courseWrapper2 = document.getElementById('courseWrapper2');
const courseWrapper3 = document.getElementById('courseWrapper3');
const courseWrapper4 = document.getElementById('courseWrapper4');
const courseWrapper5 = document.getElementById('courseWrapper5');
const courseWrapper7 = document.getElementById('courseWrapper7');
const courseWrapper8 = document.getElementById('courseWrapper8');
const courseWrapper9 = document.getElementById('courseWrapper9');
const courseWrapper10 = document.getElementById('courseWrapper10');
const courseWrapper11 = document.getElementById('courseWrapper11');
const courseWrapper12 = document.getElementById('courseWrapper12');
const courseWrapper13 = document.getElementById('courseWrapper13');
const courseWrapper14 = document.getElementById('courseWrapper14');

function createCourseCards(courses, wrapper) {
    wrapper.innerHTML = ''; // Clear existing content
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        courseCard.innerHTML = `
            <img src="${course.image}" alt="${course.title}">
            <h3>${course.title}</h3>
            <p>Duration: ${course.duration} weeks</p>
            <p>Lessons: ${course.lessons}</p>
            <p>Price:  ₹${course.price}</p>
            <button class="know-more-btn">Know More</button>
            <button class="enroll-btn">Enroll</button>
        `;
        wrapper.appendChild(courseCard);
    });
}

createCourseCards(courses, courseWrapper1);
createCourseCards(courses2, courseWrapper2);
createCourseCards(courses3,courseWrapper3);
createCourseCards(courses4,courseWrapper4);
createCourseCards(courses5,courseWrapper5);
createCourseCards(courses7,courseWrapper7);
createCourseCards(courses8,courseWrapper8);
createCourseCards(courses9,courseWrapper9);
createCourseCards(courses10,courseWrapper10);
createCourseCards(courses11,courseWrapper11);
createCourseCards(courses12,courseWrapper12);
createCourseCards(courses13,courseWrapper13);
createCourseCards(courses14,courseWrapper14);
   
document.addEventListener('DOMContentLoaded', () => {
    let currentTab = 'tab-1'; // Default active tab
    loadCourses(currentTab);

    // Tab Switching Functionality
    const tabs = document.querySelectorAll('.tabs li');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and hide all contents
            tabs.forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.style.display = 'none');

            // Add active class to the clicked tab and show the associated content
            this.classList.add('active');
            currentTab = this.getAttribute('data-tab');
            document.getElementById(currentTab).style.display = 'block';

            // Load courses dynamically based on the active tab
            loadCourses(currentTab);
        });
    });

    // Carousel Functionality
  let currentIndex = 0; // Initial course index

    function loadCourses(tabId) {
        const courseWrapper = document.getElementById(`courseWrapper${tabId === 'tab-1' ? '1' : '2'}`);
        courseWrapper.innerHTML = ''; // Clear previous courses

        // Dynamically add course cards
        coursesData[tabId].forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.classList.add('course-card');
            courseCard.innerHTML = `
                <img src="${course.image}" alt="${course.title}">
                <h3>${course.title}</h3>
                <p>Duration: ${course.duration} weeks</p>
                <p>Credits: ${course.credits}</p>
                <p>Price: ₹${course.discountedPrice} <del>₹${course.price}</del></p>
                <button class="know-more-btn">Know More</button>
                <button class="enroll-btn">Enroll</button>
            `;
            courseWrapper.appendChild(courseCard);
        });

//         const courses = document.querySelectorAll(`#${tabId} .course-card`);
//         const prevBtn = document.getElementById(`prevBtn${tabId === 'tab-1' ? '1' : '2'}`);
//         const nextBtn = document.getElementById(`nextBtn${tabId === 'tab-1' ? '1' : '2'}`);

//         // Reset index and setup carousel for the current tab
//         index1 = 0;
//         showCourses(courses, index1);

//         prevBtn.addEventListener('click', () => {
//             index1 = (index1 > 0) ? index1 - 1 : courses.length - 1;
//             showCourses(courses, index1);
//         });

//         nextBtn.addEventListener('click', () => {
//             index1 = (index1 < courses.length - 1) ? index1 + 1 : 0;
//             showCourses(courses, index1);
//         });
//     }

//     // Show courses based on the current index (only showing one card at a time)
//     function showCourses(courseCards, index1) {
//         courseCards.forEach((course, i) => {
//             course.style.display = (i === index1) ? 'block' : 'none';
//         });
//     }

//     // Initialize the first tab's course display
//     loadCourses('tab-1');
// });



//     document.addEventListener('DOMContentLoaded', () => {
//         // Tab switching logic
//         const tabs = document.querySelectorAll('.tabs li');
//         const tabContents = document.querySelectorAll('.tab-content');
    
//         tabs.forEach(tab => {
//             tab.addEventListener('click', () => {
//                 tabs.forEach(t => t.classList.remove('active')); // Remove 'active' class from all tabs
//                 tab.classList.add('active'); // Add 'active' class to the clicked tab
    
//                 const target = tab.getAttribute('data-tab'); // Get the target tab content
    
//                 // Show the selected tab content and hide others
//                 tabContents.forEach(content => {
//                     content.style.display = content.id === target ? 'block' : 'none';
//                 });
//             });
//         });
    
    //     // Carousel logic
    //     const carousels = [
    //         { wrapperId: 'courseWrapper1', prevBtnId: 'prevBtn1', nextBtnId: 'nextBtn1' },
    //         { wrapperId: 'courseWrapper2', prevBtnId: 'prevBtn2', nextBtnId: 'nextBtn2' }
    //     ];
    
    //     carousels.forEach(({ wrapperId, prevBtnId, nextBtnId }) => {
    //         const courseWrapper = document.getElementById(wrapperId);
    //         const prevBtn = document.getElementById(prevBtnId);
    //         const nextBtn = document.getElementById(nextBtnId);
    
    //         let scrollPosition = 0;
    
    //         // Calculate how much to scroll (width of one course card)
    //         const cardWidth = courseWrapper.querySelector('div').offsetWidth;
    //         const visibleCards = Math.floor(courseWrapper.offsetWidth / cardWidth); // Calculate how many cards are visible at once
    //         const scrollAmount = cardWidth * visibleCards; // Scroll by the width of visible cards
    
    //         // Left arrow click event
    //         prevBtn.addEventListener('click', () => {
    //             scrollPosition -= scrollAmount; // Move left by calculated scroll amount
    //             if (scrollPosition < 0) {
    //                 scrollPosition = 0; // Prevent scrolling beyond the start
    //             }
    //             courseWrapper.scrollTo({
    //                 left: scrollPosition,
    //                 behavior: 'smooth'
    //             });
    //         });
    
    //         // Right arrow click event
    //         nextBtn.addEventListener('click', () => {
    //             scrollPosition += scrollAmount; // Move right by calculated scroll amount
    //             if (scrollPosition >= courseWrapper.scrollWidth - courseWrapper.offsetWidth) {
    //                 scrollPosition = courseWrapper.scrollWidth - courseWrapper.offsetWidth; // Prevent overscrolling to the right
    //             }
    //             courseWrapper.scrollTo({
    //                 left: scrollPosition,
    //                 behavior: 'smooth'
    //             });
    //         });
    //     });
    // });
    
    // Carousel Function
// function initCarousel(wrapperId, prevBtnId, nextBtnId) {
//     const courseWrapper = document.getElementById(wrapperId);
//     const prevBtn = document.getElementById(prevBtnId);
//     const nextBtn = document.getElementById(nextBtnId);
//     let scrollPosition = 0;
//     const cardWidth = 300; // Assuming each course card is 300px wide
//     const visibleCards = 4; // Number of cards visible at once
//     const maxScroll = cardWidth * (courseWrapper.children.length - visibleCards);

//     prevBtn.addEventListener("click", function () {
//         scrollPosition = Math.max(scrollPosition - cardWidth, 0);
//         courseWrapper.style.transform = `translateX(-${scrollPosition}px)`;
//     });

//     nextBtn.addEventListener("click", function () {
//         scrollPosition = Math.min(scrollPosition + cardWidth, maxScroll);
//         courseWrapper.style.transform = `translateX(-${scrollPosition}px)`;
//     });
// }



