// var groceryList = ["bread", "eggs", " butter", "milk"];
// console.log(groceryList[2]);
// console.log("I have to buy " + groceryList[0]);

// Create an array of four family members, friends, or people or pets you know.
//console.log the first and last item
// Console.log a string stating your relationship to one of the array elements, for example "Nathan is my cousin" or "Sofia is my friend".

 // var petsList = ["Leila", "Diego", "Tex", "Ryder"];
// console.log(petsList[2]);
// console.log(petsList[2] + " is my furry son");

// for (var i = 0 ; i < groceryList.length; i++) {
//     console.log("At index " + i);
//     console.log("I have to buy " + groceryList[i] + " and ...");
// }

// Given an array
// //     var cities = ["San Antonio", "Austin", "Dallas", "Houston"];
// // First, create a for loop that generates the output:
// //     ```
// // San Antonio
// // Austin
// // Dallas
// // Houston
// // ```
// // Then elaborate on the loop output to generate output like:
// //     ```
// // Student number 1 lives in San Antonio
// // Student number 2 lives in Austin
// // Student number 3 lives in Dallas
// // Student number 4 lives in Houston
// // ```
// // Remember the key concept that you can use the iterator variable (i) to access array elements in a loop.

// var cities = ["San Antonio", "Austin", "Dallas", "Houston"];
// for (var i = 0 ; i < cities.length; i++) {
//    console.log("At index " + i);
//     console.log("Student " + (i + 1) + " lives in " + cities[i]);
// }

// For each loop
// var prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
//
// prices.forEach(function (price, index){
//     console.log("Item number " + (index + 1) + "costs $ " +price);
// });

// groceryList.push("potatoes");
// console.log(groceryList);
// groceryList.pop();
// console.log(groceryList);
//
// groceryList.unshift("sliced cheddar");
// console.log(groceryList);
// groceryList.shift();
// console.log(groceryList);
//
// var indexOfButter = groceryList.indexOf("butter");
// console.log("The butter is at index " + indexOfButter);
//
// groceryList[2] = "peanut butter";
// console.log(groceryList);
var groceryList = ["bread", "eggs", "butter", "milk"];
var firstHalfOfList = groceryList.slice(0, 2);
console.log(firstHalfOfList);
console.log(groceryList);
// This method is used to slice off from the beginning up to but not including element 2.
var secondHalfOfList = groceryList.slice(2);
console.log(secondHalfOfList);
firstHalfOfList.push("peanut butter");
console.log(firstHalfOfList);
groceryList = firstHalfOfList.concat(secondHalfOfList);
console.log(groceryList);

groceryList.reverse();
console.log(groceryList);
// Method to reverse order of the list
groceryList.sort();
console.log(groceryList);

