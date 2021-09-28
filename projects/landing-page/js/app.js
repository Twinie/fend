

const list = document.querySelector("#navbar__list");                                // <ul> selected to add List items into it.

const array = [
    {text:"About", class:".about"},
    {text:"Service", class:".service"},
    {text:"Manual", class:".manual"},
    {text:"Contact", class:".contact"}
]

for(let i=0; i<array.length; i++){
    const item = document.createElement("li");
    item.innerHTML = array[i]['text'];
    list.appendChild(item);


    const classForLI = item.setAttribute("data-class", array[i]['class']);           // the data-class value is added to the list items, which is actually the class of the sections to move to on clicking the list items. 

    
    item.addEventListener("click", function(evt){
        const clickedLI = evt.target;
        const section = clickedLI.getAttribute("data-class");
        const sectToMove = document.querySelector(section);                        // Here the above data class is assigned by document.querySelector.
        sectToMove.scrollIntoView({behavior: "smooth"});

        const selectToRemoveClass = document.querySelectorAll("ul li");           // to remove the styling once the other item is clicked
        for(let j=0; j<selectToRemoveClass.length; j++){
        const removedClass = selectToRemoveClass[j].classList;
        removedClass.remove("active-li");

        console.log(removedClass);
        }
    


        const log = clickedLI.classList;                                          // to add styling to active states, class is added to LI.
        log.add("active-li");
        console.log(log);
    })

}

const navbarListItems = document.querySelectorAll('ul li')
const scrollItems = document.querySelectorAll("section");
let lastClass;

window.addEventListener("scroll", function(){
    const mainHeroHeight = document.querySelector(".main__hero").offsetTop;        // offsetTop is used to take up the height from the beginning of the document till the next section starts.
    let fromTop = window.pageYOffset + mainHeroHeight;                             //pageYOffset is used to know the height of the scrolled page from top.  

    let scrolledItemArray = [];
    scrollItems.forEach(function(scrollItem){
if (scrollItem.offsetTop < fromTop){
    scrolledItemArray.push(scrollItem)
}
    })

    const lastScrolledItem = scrolledItemArray[scrolledItemArray.length - 1];
    let classOfScrollItem = lastScrolledItem ? lastScrolledItem.getAttribute("class") : "";

    if(lastClass !== classOfScrollItem){
        lastClass = classOfScrollItem;

navbarListItems.forEach(function(li, index){                                         
    li.classList.remove("active-li");

    if(li.getAttribute("data-class") === `.${lastClass}`){
    li.classList.add("active-li");                                                 // again the active-li is added as to highlight the list-item whose section is being viewed.
    }
})
    }
})
