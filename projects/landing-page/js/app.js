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

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



const list = document.querySelector("#navbar__list");

const array = [
    {text:"Home", class:".main__hero", classForLI: "home-nav", classLIwithDot: ".home-nav"},
    {text:"About", class:".about", classForLI: "about-nav", classLIwithDot: ".about-nav"},
    {text:"Service", class:".service", classForLI: "service-nav", classLIwithDot: ".service-nav"},
    {text:"Manual", class:".manual", classForLI: "manual-nav", classLIwithDot: ".manual-nav"},
    {text:"Contact", class:".contact", classForLI: "contact-nav", classLIwithDot: ".contact-nav"}
]

for(i=0; i<array.length; i++){
    const item = document.createElement("li");
    item.innerHTML = array[i]['text'];
    list.appendChild(item);


    item.setAttribute("data-class", array[i]['class']);

    
    item.addEventListener("click", function(evt){
        const clickedLI = evt.target;
        const section = clickedLI.getAttribute("data-class");
        const sectToMove = document.querySelector(section);
        sectToMove.scrollIntoView({behavior: "smooth"})
    })
}


