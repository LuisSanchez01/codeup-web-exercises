// get access to the button in the DOM
// var button = document.querySelector("button");
// Write the event handler
// aka event listener, callback
function doThisWhenTheButtonIsClicked() {
    alert("You clicked me!");
}
// Finally, we register the handler
// button.addEventListener("click", doThisWhenTheButtonIsClicked);
//
// var secondButton = document.getElementsByTagName("button")[1];
//
// secondButton.onclick = doThisWhenTheButtonIsClicked;

var allTheButtons = document.getElementsByTagName("button");
for (var i = 0; i < allTheButtons.length; i++) {
    allTheButtons[i].addEventListener("click", doThisWhenTheButtonIsClicked);
}

// Use HTML and css to create a square with a background color on a html page.
// register an event handler and write its code such that when you click on a square it alerts that it is a square and what color it is.

var theSquare = document.querySelector(".square");

function alertStatus () {
    alert("I am a big red square");
}

theSquare.addEventListener("click", alertStatus);


var firstButton = document.querySelector("button");
// get the reference to the element
function showAlert() {
    document.querySelector("p").innerHTML = "You clicked me!";
}
// write the event handler
// register the event handler with a button
firstButton.addEventListener("click", showAlert);
// now get a reference to the second button
var secondButton = document.querySelectorAll("button")[1];

function overWriteText() {
    document.querySelector("p").innerHTML = "uh-uh, the user ckicked me!";
}

secondButton.addEventListener("click", overWriteText);


