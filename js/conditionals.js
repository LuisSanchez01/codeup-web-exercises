// var analyzeColor = "green";
//
//     if (analyzeColor === "green") {
//         alert("Give me money");
//         } else if (analyzeColor === "blue") {
//         alert("blue is the color of the sky");
//         } else if (analyzeColor === "red") {
//         alert ("Strawberries are red");
  //  }

// CONDITIONALS MINI-EXERCISES

// 1. Create conditional logic to represent the following scenario...
// If the car is locked, alert 'will open', otherwise, alert 'will not open
var vehicleDoor = "locked";

 if (vehicleDoor === "locked") {
     alert("will not open");
 } else {
     alert("will open");
}


// 2. Write a function that takes in a string and returns a message based on the string length:

// if the string is no characters, return "Empty string"
// if the string is one character long, return "One character long"
// if the string is two characters long, return "Two characters long"
// Otherwise, return, "That is a long string!"

    var stringLength = "1";

    if (stringLength.length === 0) {
        alert("Empty string");
    } else if (stringLength.length === 1) {
        alert("One character long");
    } else if (stringLength.length === 2) {
        alert("Two characters long");
    } else {
        alert("That is a long string" + "!");
    }


// 3. Refactor the Following Code into a Ternary Operator:

/*
    var message;
    var num = 5;
    if (num < 10) {
        message = 'Num less than 10';
    } else {
        message = 'Num more than 10';
    }
*/
var num = 5;
var message = (num < 10) ? "Num less than 10" : "Num more than 10";
console.log("num < 10");