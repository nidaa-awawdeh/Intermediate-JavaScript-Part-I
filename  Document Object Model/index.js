//1 Select the section with an id of container without using querySelector.

var container = document.getElementById("container");
//2 Select the section with an id of container using querySelector.

var container = document.querySelector("#container");

//3Select all of the list items with a class of "second".
document.getElementsByClassName("second");
document.querySelectorAll(".second");

// 4Select a list item with a class of third,
//but only the list item inside of the ol tag.
document.querySelector("ol .third");

//5 Give the section with an id of container the text "Hello!".
var section = document.getElementById("container");
section.document.innerText = "Hello!";

//6 Add the class main to the div with a class of footer.
var footer = document.querySelector(".footer");
footer.classList.add("main");

// 7 - Remove the class main on the div with a class of footer.
var footer = document.querySelector(".footer");
footer.classList.remove("main");