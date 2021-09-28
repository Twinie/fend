# Welcome to my Site !

## Description

- This is a dynamic site with 4 sections.

- I have added the hover effect and styling for the list items in the nav-bar to keep it focused while the appropriate section is being viewed.

- The navbar is styled with Flex property of CSS.

- First of all an array of objects is made containing the innerHTML and class properties which are to be assigned to every \<li\> that is created.

- The List items are added to empty \<ul\> with the help of JavaScript, using for loop iterating through the objects in the array to assign the innerHTML and data-class.

- As addEventListener will not function unless an event is given, the eventlistener given would not function with the for loop as the loop that is assigning the values ends before the event("click") takes place.

## Usage

- for loop is used to iterate over each object of an array.

- document.querySelector is used to select an element with id="navbar\_\_list" because that is where the added list items will be appended where element.appendChild is used to add \<li\> to \<ul\>.

- setAattribute()with the parameter data-class is added so as to not repeat the code for all the list items which on click event moves to the appropriate section.Then, the appropriate section to be viewed on the specific click is done using getAtrribute proprety with the same parameter, hence the code is minimized and no repetition of code takes place making it look simple and short.

- Then addEventListener is added for the click event.

- scrollIntoView method is used with behaviour property for smooth scrolling onto the appropriate section.

- classList property is used to add an active class to every item as styling had to be done for active sections i.e the sections which is viewed has to be be highlighted like it is highlighted during hovering the items on the navbar.

- Now adding class to all the items makes it highlighted permanently once it is clicked, we need to remove the class using the classList property with remove method before adding the class.

- addEventListener is added for the scroll event to clearly show which section is being scrolled and which section is on the viewport that should be highlighted on the navbar.

- offsetTop is used to know the height of the section from the beginning of the document. It is used to set the height and to know from where the section starts and to add the class to the appropriate list-item to make it clear from the navbar about the section being viewed or scrolled.
