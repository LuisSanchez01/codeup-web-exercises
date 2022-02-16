


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
function areaOrPerimeter(length, width) {
    if (isNaN(parseFloat(length)) || isNaN(parseFloat(width)){
    if (length == width) {
        return false;
    }
     return   length * width;
}
};
console.log(areaOrPerimeter(4, 4));
console.log(areaOrPerimeter(6, 10));

