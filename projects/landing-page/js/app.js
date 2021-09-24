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
    {text:"Home", class:".main__hero"},
    {text:"About", class:".about"},
    {text:"Service", class:".service"},
    {text:"Manual", class:".manual"},
    {text:"Contact", class:".contact"}
]

for(let i=0; i<array.length; i++){
    const item = document.createElement("li");
    item.innerHTML = array[i]['text'];
    list.appendChild(item);


    item.setAttribute("data-class", array[i]['class']);                   

    
    item.addEventListener("click", function(evt){
        const clickedLI = evt.target;
        const section = clickedLI.getAttribute("data-class");
        const sectToMove = document.querySelector(section);
        sectToMove.scrollIntoView({behavior: "smooth"});

        const removeClass = document.querySelectorAll("ul li");           // to remove the styling once the other item is clicked
        for(let j=0; j<removeClass.length; j++){
        const removedClass = removeClass[j].classList;
        removedClass.remove("active-li");

        console.log(removedClass);
        }
    


        const log = clickedLI.classList;                                 // to add styling to active states, class is added to LI.
        log.add("active-li");
        console.log(log);
    })

}

