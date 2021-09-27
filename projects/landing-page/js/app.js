


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



const list = document.querySelector("#navbar__list");                  // <ul> selected to add List items into it.

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


    const classForLI = item.setAttribute("data-class", array[i]['class']);                  // the data-class value is added to the list items, which is actually the class of the sections to move to on clicking the list items. 

    
    item.addEventListener("click", function(evt){
        const clickedLI = evt.target;
        const section = clickedLI.getAttribute("data-class");
        const sectToMove = document.querySelector(section);               // Here the above data class is assigned by document.querySelector.
        sectToMove.scrollIntoView({behavior: "smooth"});

        const selectToRemoveClass = document.querySelectorAll("ul li");           // to remove the styling once the other item is clicked
        for(let j=0; j<selectToRemoveClass.length; j++){
        const removedClass = selectToRemoveClass[j].classList;
        removedClass.remove("active-li");

        console.log(removedClass);
        }
    


        const log = clickedLI.classList;                                 // to add styling to active states, class is added to LI.
        log.add("active-li");
        console.log(log);
    })

}

// const topMenuListHeight = list.offsetTop;
const navbarListItems = document.querySelectorAll('ul li')
const scrollItems = document.querySelectorAll("section");
let lastClass;

window.addEventListener("scroll", function(){
    const mainHeroHeight = document.querySelector(".main__hero").offsetTop;
    console.log(mainHeroHeight);
    let fromTop = window.pageYOffset + mainHeroHeight;

    let scrolledItemArray = [];
    scrollItems.forEach(function(scrollItem){
if (scrollItem.offsetTop < fromTop){
    scrolledItemArray.push(scrollItem)
}
    })

    const lastScrolledItem = scrolledItemArray[scrolledItemArray.length - 1];
    let classOfScrollItem = lastScrolledItem ? scrolledItemArray.getAttribute("class") : "";

    if(lastClass !== classOfScrollItem){
        lastClass = classOfScrollItem;

navbarListItems.forEach(function(li, index){
    li.classList.remove("active-li");

    const itemsToAddClass = lastScrolledItem.classList.add("active-li");

})
    }
})
