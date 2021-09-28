const list = document.querySelector("#navbar__list"); // <ul> selected to add List items into it.

const array = [{
        text: "About",
        class: ".about"
    },
    {
        text: "Service",
        class: ".service"
    },
    {
        text: "Manual",
        class: ".manual"
    },
    {
        text: "Contact",
        class: ".contact"
    }
]

for (let i = 0; i < array.length; i++) {
    const item = document.createElement("li");
    item.innerHTML = array[i]['text'];
    list.appendChild(item);

    // the data-class value is added to the list items, which is actually the class of the sections to move to on clicking the list items. 
    item.setAttribute("data-class", array[i]['class']); 

    item.addEventListener("click", function(evt) {
        const clickedLI = evt.target;
        const section = clickedLI.getAttribute("data-class");
        // Here the above data class is assigned by document.querySelector.
        const sectToMove = document.querySelector(section); 
        sectToMove.scrollIntoView({
            behavior: "smooth"
        });

        // to remove the styling once the other item is clicked
        const selectToRemoveClass = document.querySelectorAll("ul li"); 
        for (let j = 0; j < selectToRemoveClass.length; j++) {
            const removedClass = selectToRemoveClass[j].classList;
            removedClass.remove("active-li");
        }


        // to add styling to active states, class is added to LI.
        const log = clickedLI.classList; 
        log.add("active-li");
    })

}

const navbarListItems = document.querySelectorAll('ul li')
const scrollItems = document.querySelectorAll("section");
let lastClass;

window.addEventListener("scroll", function() {
    // offsetTop is used to take up the height from the beginning of the document till the next section starts.
    const mainHeroHeight = document.querySelector(".main__hero").offsetTop; 
    //pageYOffset is used to know the height of the scrolled page from top. 
    let fromTop = window.pageYOffset + mainHeroHeight;  

    let scrolledItemArray = [];
    scrollItems.forEach(function(scrollItem) {
        if (scrollItem.offsetTop < fromTop) {
            scrolledItemArray.push(scrollItem)
        }
    })

    const lastScrolledItem = scrolledItemArray[scrolledItemArray.length - 1];
    let classOfScrollItem = lastScrolledItem ? lastScrolledItem.getAttribute("class") : "";

    if (lastClass !== classOfScrollItem) {
        lastClass = classOfScrollItem;

        navbarListItems.forEach(function(li) {
            li.classList.remove("active-li");

            if (li.getAttribute("data-class") === `.${lastClass}`) {
                // again the active-li is added as to highlight the list-item whose section is being viewed.
                li.classList.add("active-li"); 
            }
        })
    }
})