//write a function that in a number and returns that number plus itself

// function numberPlusItself(number) {
//     return number + number;
// }


// Write a function that takes in two numbers, doubles each number, and then returns the sum of both numbers doubled

// function sumOfDoubles(number1, number2) {
//     return (number1 * 2) + (number2 * 2);
// }


// Write a function that takes in a number and squares it (that is, returns that number multiplied by itself)

// function squareANumber(number) {
//     return number * number;
// }


// Write a function that takes in a string and returns its length

// function stringLength(string) {
//     return string.length;
// }

// Write a function that takes in two strings and returns the sum of their lengths

// function sumOfStringLengths(string1, string2) {
//     return string1.Length + string2.length;
// }

// Write a function that takes in a number and returns the string "even" or "odd" depending on whether the number is even or odd

// function oddOrEven(number) {
//     if (number % 2 === 0){
//         return "even";
//     } else {
//         return "odd";
//     }
// }

// Write a function called removeBs that takes in an array of strings and returns an array of strings with all b’s removed from each string. Assume
// the array contains only string elements.
//     Examples...
// removeBs([‘abc’, ‘ab’, ‘cat’, ‘Bay’]) // returns [‘ac’, ‘a’, ‘cat’, ‘ay’]

// function removeBsFromString(str) {
//     return str.replaceAll("b", "").replaceAll("B", "");
// }
//
// function removeBs(arr) {
//     var output = [];
//     arr.forEach(function (str) {
//         output.push(removeBsFromString(str));
//     });
//     return output;
// }

// Write a function, createUserMsg, that takes in a user object like the following...
// {
//     username: ‘jbomb’,
//     email: ‘john@email.com’,
//     isAdmin: true
// }
// ...and returns a string output that displays in the console like this...
// ‘User jbomb is an admin and can be reached at john@email.com’
// If jbomb were not an admin, the message should display...
// ‘User jbomb is not an admin and can be reached at john@email.com’

// var createUserMsg = [{
//     username: "jbomb",
//     email: "john@email.com",
//     isAdmin: true,
//     message: "User jbomb is an admin and can be reached at john@email.com",
// }];
// createUserMsg.forEach(function (createUserMsg){
//     console.log(createUserMsg.message);
// });

// var createUserMsg = {
//     username: "jbomb",
//     email: "john@email.com",
//     isAdmin: true,
// };
//
// function createUserMsg(user) {
//     if (user.isAdmin) {
//         return "User " + user.username + "is an admin and can be reached at " + user.email
//     } else {
//         return "User " + user.username + "is not an admin and can be reached at " + user.email;
//     }
// }
// console.log(createUserMsg(user));

// const areaOrPerimeter = function(l , w) {
//
//     // Return your answer
// };
// function areaOrPerimeter(length, width) {
//     if (isNaN(parseFloat(length)) || isNaN(parseFloat(width)){
//     if (length == width) {
//         return false;
//     }
//      return   length * width;
// }
// };
// console.log(areaOrPerimeter(4, 4));
// console.log(areaOrPerimeter(6, 10));

// Write a function, sumTheStrings
// it should take two numeric strings as input
//it should add the numbers
//and output the sum **as a string**

// bonus: return false if the arguments
// are anything other than numeric strings


// function sumTheStrings([a, b]) {
//     return (a) + (b) + " ";
//     if (input !== number) {
//         return false;
//     }
// }
// console.log(sumTheStrings([2, 3]));
// console.log(sumTheStrings([x, y]));

// Same problem but different solution

// function sumTheStrings(numString1, numString2){
//     if (typeof numString1 !== "string" || typeof numString2 !== "string" || isNaN(parseFloat(numString2)) || isNaN(parseFloat(numString1))){
//         return false;
//     }
//     return (parseFloat(numString1) + parseFloat(numString2)).toString()


// function createNames(arr1, arr2) {
//     var output = [];
//     var length = arr1.length;
//     for (var i = 0; i < arr1.length; i += 1) {
//         outpput.push({
//             firstName: arr1[i],
//             lastName: arr2[i]
//         });
//     }
//     return output;
// }
//     var firstNames = ["CJ", "Max", "Claude", "Meowmeow"];
//     var lastNames = ["Cat", "Feline", "Kitten", "Calico"];
//
//
// console.log(createNames(firstNames, lastNames));
//
// function printer_error(string) {
//     var totalOverM = 0;
//     for (var i in string) {
//         if (string[i] > "m"){totalOverM++}
//     }
//     return "" + totalOverM + "/" + string.length;
// }

// 03/04/2022
// Create a function that accepts an object with two properties, parcelNumber and weight, and returns the weight.

function parcelWeight(object){
    return object.weight;
}

var parcel = {
    parcelNumber: 1,
    weight: 20
}

console.log(parcelWeight(parcel));
// output 20


// Create a function that accepts an array of objects with two properties, parcelNumber and weight, and returns the
// total weight of all parcels.

function totalWeight(arrayOfObjects){
    var total = 0;
    for (var i = 0; i < arrayOfObjects.length; i++){
        total+= arrayOfObjects[i].weight;
    }
    return total;
}

var parcels = [{number: 1, weight: 20}, {number: 2, weight: 25}];

totalWeight([{parcelNumber: 1, weight: 20}, {parcelNumber: 2, weight: 25}]);
// output 45

// Create a function that accepts an array of objects with two properties, parcelNumber and weight, and outputs the
// content to a web page in two columns, with the total listed at the end.

function outputParcelInfo(parcelsArray){
    var outputDiv = document.getElementById("parcelInfo");
    var total = 0;
    var html = "<th><tr><th>Parcel Number</th></th>Weight</th>";
    for (var i = 0; i < parcelsArray.length; i++){
        total += parcelsArray[i].weight;
        html += "<tr><td>" + parcelsArray[i].number + "</td><td>" + parcelsArray[i].weight + "</td></tr></tr>";
    }
    html += "<tr><td>Total:</td></td>" + total + "</td></table>";
    outputDiv.innerHTML = html;
}

// DOM warmup:
// Create a heading that says "Good morning!"
// Create a button that says "Press if after 12pm"
// When the button is pressed, "Good morning" changes to "Good afternoon"

// var theButton = document.querySelector("button");
//
// theButton.addEventListener("click", function (){
//     document.querySelector(("h1").innerText = "Good afternoon!";
//     )
// })  Wrong, Git pull for correct structure






