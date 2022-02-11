// -- Mini Exercise 1
// Create a few beverage objects and assign values to each object for the following properties:
//     - brandName
//     - type
//     - volumeInLiters
//     - priceInCents
//     - expirationDate
//     - datesOfPreviousSips (use an array of strings)
// - isOpen
// Define your objects using both literal syntax to create all properties and values at once and also try
// defining empty objects and assign property values in separate statements using the dot notation.

// var beverage = {};
//      beverage.brandName = "Coca-Cola";
//      beverage.type = "soda";
//      beverage.volumeInLiters = 1;
//      beverage.priceInCents = 150;
//      beverage.expirationDate = "01/01/2023";
//      beverage.datesOfPreviousSips = ["02/10/2022", "02/11/2022"];
//      beverage.isOpen = "02/10/2022";
//      //redefine
//
// console.log(beverage);

// Mini Exercise 2
var users = [{
          givenName: "Sam",
          age: 21
      },
     {
          givenName: "Cathy",
          age: 34
    },
    {
          givenName: "Karen",
          age: 43
}];
// 1. Log the names of all users in a single console log separated by spaces. // output = “Sam Cathy Karen”
// 2. Change the names of all users to “John Doe”
//   3. Increase the current age of all users by 1
// Can you accomplish each step using iteration?

     users.forEach(function (users){
     console.log(users.givenName);
     });
     users.forEach(function (users) {
          users.givenName = "John Doe";
     });



