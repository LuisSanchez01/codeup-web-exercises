// var accessTheDOM= document.getElementById("dc");
// var showMe = accessTheDOM.innerText;
// alert(showMe);
// above blocked out to show ability to edit or modify below

var like = document.getElementById("like");
var dontLike = document.getElementById("dontLike");
var marvel = document.getElementById("marvel");
var dc = document.getElementById("dc");

dc.innerText = dc.innerText + " Animated Universe";
// this line above changes the text of the original dc var.
dc.innerText += " rocks!";
// rocks! was an addition

marvel.setAttribute("class", "hotpink");
// enter the color without the period. but spelled exactly the same as html text.

document.getElementById("marvel").setAttribute("class", "hotpink");
// another way to type it out.

var hotPinks = document.getElementsByClassName("hotpink");
// just commented out the hotpink style in html
// hotPinks[0].style.color = "hotpink";
// creates a style= "color: hotpink; on inspect in web page developer tools.

dc.setAttribute("class", "hotpink");
for (var i = 0; i < hotPinks.length; i++) {
    hotPinks[i].style.color = "hotpink";
}

// var submitButton = document.querySelector("#colorSubmission");
// this line is for new html code in html file
var submitButton = document.getElementById("colorSubmission");
// create a function that is invoked when the button is clicked
submitButton.onclick = function () {
    // get a reference to the form input element
    var colorInput = document.getElementById("colorPreference");
    // get a reference to the actual form input
    var userInput = colorInput.value;
    // alert was pushed up but now showing example of all paragraphs in html
    // alert(userInput);
    // get a reference to all the paragraphs on the page
    var paragraphs = document.getElementsByTagName("p");
    // loop through the list of paragraphs
    for (var i = 0; i < paragraphs.length; i++) {
        // for each paragraph, change the color to match the user input
        paragraphs[i].style.color = userInput;
    }
}
// this code allows user to input any color and the alert will show the color in text.

// Using data attributes

// Get a reference to the hulk paragraph
var theHulk = document.getElementById("hulk");
// get a reference to the data attribute, old school
var hulkState = theHulk.getAttribute("data-state");
// output the value of the data-state attribute to the page
// theHulk.innerText += " is in " + hulkState + " state";

// get the value of the data-strength attribute the "new" way
var hulkStrength = theHulk.dataset.strength;

// theHulk.innerText += ". His strength is " + hulkStrength;

var hulkIntelligence = theHulk.dataset.intelligence;
// theHulk.innerText += " His intelligence is " + hulkIntelligence + ".";

// get a reference to the transform hulk button
var transformButton = document.getElementById("transformHulk");
transformButton.onclick = function () {
    var hulk = document.getElementById("hulk");
    var hulkState = hulk.dataset.state;
    if (hulkState === "hulk"){
        hulk.dataset.state = "Bruce Banner";
    } else {
        hulk.dataset.state = "hulk";
    }
    hulk.innerText = "The Hulk is in " + hulk.dataset.state + " state";
}


