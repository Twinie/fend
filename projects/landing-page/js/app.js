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
    {text:"Home", class:".main__hero",classForLI: "home-nav"},
    {text:"About", class:".about",classForLI: "about-nav"},
    {text:"Service", class:".service",classForLI: "service-nav"},
    {text:"Manual", class:".manual",classForLI: "manual-nav"},
    {text:"Contact", class:".contact",classForLI: "contact-nav"}
]

for(i=0; i<array.length; i++){
    const items = document.createElement("li");
    items.innerHTML = array[i]['text'];
    list.appendChild(items);


    items.setAttribute("class", array[i]['classForLI']);

    // items.addEventListener("click", function(evt){
    //         const classes = document.querySelector(array[i]['class']);
    //     classes.scrollIntoView();
    // })

    
}

//code to move to the appropriate section from the navBar.

const navigation = document.querySelector(".home-nav");
navigation.addEventListener("click", function(){
    console.log("Home-Page");
    const homepage = document.querySelector(".main__hero");
homepage.scrollIntoView();
})

const about = document.querySelector(".about-nav");
about.addEventListener("click", function(){
    console.log("About");
    const aboutPage = document.querySelector("#section1");
    aboutPage.scrollIntoView();
})

const service = document.querySelector(".service-nav");
service.addEventListener("click", function() {
    console.log("Service");
    const servicePage = document.querySelector("#section2");
    servicePage.scrollIntoView();
})

const manual = document.querySelector(".manual-nav");
manual.addEventListener("click", function() {
    console.log("Manual");
    const manualPage = document.querySelector("#section3");
    manualPage.scrollIntoView();
})

const contact = document.querySelector(".contact-nav");
contact.addEventListener("click", function(){
    console.log("Contact");
    const homepage = document.querySelector(".contact");
homepage.scrollIntoView();
})
