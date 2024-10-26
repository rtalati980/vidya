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

// Dynamically generate course cards
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
            <p>Price: ₹${course.discountedPrice} (₹${course.price})</p>
            <button class="know-more-btn">Know More</button>
            <button class="enroll-btn">Enroll</button>
        `;
        wrapper.appendChild(courseCard);
    });
}

// Call the function to populate courses in Tab 1 and Tab 2
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

let currentPosition1 = 0;
let currentPosition2 = 0;
let currentPosition3 = 0;
let currentPosition4 = 0;
let currentPosition5 = 0;
let currentPosition7 = 0;
let currentPosition8 = 0;
let currentPosition9 = 0;
let currentPosition10 = 0;
let currentPosition11 = 0;
let currentPosition12 = 0;
let currentPosition13 = 0;
let currentPosition14 = 0;
const totalCourses1 = courses.length;
const totalCourses2 = courses2.length;
const totalCourses3 = courses3.length;
const totalCourses4 = courses4.length;
const totalCourses5 = courses5.length;
const totalCourses7 = courses7.length;
const totalCourses8 = courses8.length;
const totalCourses9 = courses9.length;
const totalCourses10 = courses10.length;
const totalCourses11 = courses11.length;
const totalCourses12 = courses12.length;
const totalCourses13 = courses13.length;
const totalCourses14 = courses14.length;


const visibleCourses = 4; // Number of visible courses at a time

// Function to update the course carousel position
// Tabs switching functionality
createCourseCards(courses, courseWrapper1);
createCourseCards(courses2, courseWrapper2);

let currentPosition112 = 0;
let currentPosition21 = 0;
const totalCourses111 = courses.length;
//const totalCourses2 = courses2.length;
//const visibleCourses = 4; // Number of visible courses at a time

// Function to update the course carousel position
function updateCourseCarousel(wrapper, currentPosition) {
    const newPosition = -(currentPosition * 100 / visibleCourses);
    wrapper.style.transform = `translateX(${newPosition}%)`;
}

// Left arrow click event for Tab 1
document.getElementById('prevBtn1').addEventListener('click', () => {
    currentPosition112 = (currentPosition112 === 0) ? totalCourses111 - visibleCourses : currentPosition112 - 1;
    updateCourseCarousel(courseWrapper1, currentPosition112);
});

// Right arrow click event for Tab 1
document.getElementById('nextBtn1').addEventListener('click', () => {
    currentPosition112 = (currentPosition112 === totalCourses111 - visibleCourses) ? 0 : currentPosition112 + 1;
    updateCourseCarousel(courseWrapper1, currentPosition112);
});

// Left arrow click event for Tab 2
document.getElementById('prevBtn2').addEventListener('click', () => {
    currentPosition2 = (currentPosition2 === 0) ? totalCourses2 - visibleCourses : currentPosition2 - 1;
    updateCourseCarousel(courseWrapper2, currentPosition2);
});

// Right arrow click event for Tab 2
document.getElementById('nextBtn2').addEventListener('click', () => {
    currentPosition2 = (currentPosition2 === totalCourses2 - visibleCourses) ? 0 : currentPosition2 + 1;
    updateCourseCarousel(courseWrapper2, currentPosition2);
});

// Auto swipe for Tab 1
function autoSwipeCourses1() {
    currentPosition1 = (currentPosition1 === totalCourses1 - visibleCourses) ? 0 : currentPosition1 + 1;
    updateCourseCarousel(courseWrapper1, currentPosition1);
}

// Auto swipe for Tab 2
function autoSwipeCourses2() {
    currentPosition2 = (currentPosition2 === totalCourses2 - visibleCourses) ? 0 : currentPosition2 + 1;
    updateCourseCarousel(courseWrapper2, currentPosition2);
}

// Auto swipe interval every 5 seconds for both tabs
setInterval(autoSwipeCourses1, 5000);
setInterval(autoSwipeCourses2, 5000);

// Tabs switching functionality
const tabs = document.querySelectorAll('.tabs li');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove 'active' class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        // Add 'active' class to the clicked tab
        this.classList.add('active');
        
        // Hide all tab contents
        tabContents.forEach(content => content.style.display = 'none');
        
        // Show the associated tab content
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).style.display = 'block';
    });
});

// Initially display the first tab's content
document.getElementById('tab1').style.display = 'block';
