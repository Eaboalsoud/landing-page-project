/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */
//set the starting time  to measure the speed of the code
const startingTime = performance.now();
/**
 * Define Global Variables
 */
const sectionCount = document.querySelectorAll('section').length;
const navList = document.querySelector('#navbarlist');
const sections = document.querySelectorAll('section');
var mybutton = document.getElementById("myBtn");
//console.log(sectionCount);
/**
 * End Global Variables
 * Start Helper Functions
 * Scroll to anchor ID using scrollTO event
 * Scroll to section on link click
 * Build menu 
 */
navList.setAttribute('style', '.navbar__menu');
//console.log(navList);

function generatenavbar() {
    for (i = 1; i <= sectionCount; i++) {
        var item = document.createElement('li');
        var a = document.createElement('a');
        var link = document.createTextNode('section' + i);
        a.appendChild(link);
        a.title = "section" + i;
        a.href = "#section" + i;
        item.appendChild(a);
        item.style.textDecoration = "none";
        a.style.textDecoration = "none";
        item.setAttribute('style', '.menu__link');
        navList.appendChild(item);
    }
    document.body.appendChild(navList);
    if (sectionCount <= 1) {
        //setTimout to 0 milliseconds!
        setTimeout(generatenavbar, 0);
    }
}
generatenavbar();

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */
//-------------------------------------------------------------------------

function isSectionActive() {
    for (const section of sections) {
        const position = section.getBoundingClientRect();
        if (position.top <= 150 && position.bottom >= 150) {
            let sectionLink = document.querySelector(`a[href="#${section.getAttribute('id')}"]`);
            //Add class 'active' to section links  when it is near top of viewport
            sectionLink.classList.add("active");
            // Add class 'our-active-class' to section when near top of viewport
            section.classList.add("your-active-class");
        } else {
            let sectionLink = document.querySelector(`a[href="#${section.getAttribute('id')}"]`);
            sectionLink.classList.remove("active");
            section.classList.remove("your-active-class");
        }
    }
}
document.addEventListener('scroll', function() {
    isSectionActive();
});
//------------------------------------------------------------------------ 
// hide and visable for the navbar and the topbutton 
function scrollFunction() {
    for (i = 1; i < sectionCount + 1; i++) {
        const section = document.getElementById('section' + i);
        const box = section.getBoundingClientRect();
        // console.log(box);
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
            document.getElementById("navbarlist").style.visibility = "visible";
            mybutton.style.display = "block";
        } else {
            document.getElementById("navbarlist").style.visibility = "hidden";
            mybutton.style.display = "none";
        }
    }
}
document.addEventListener("scroll", function() {

    scrollFunction()

});
//--------------------------------------------------------------------------------------
//code for the button https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
mybutton.addEventListener("click", topFunction);

//--------------------------------------------------------------------------------------
const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');