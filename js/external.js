console.log("Hello from External JavaScript");
alert("Hola!");
var userInput = prompt("What is your favorite color?");
alert(userInput + " Is my favorite color too");

var priceForMoviePerDay = 3;
var daysOfLittleMermaid = Number(prompt("How many days are you renting the Little Mermaid for?"))
var daysOfBrotherBear = Number(prompt("How many days are you renting Brother Bear for?"))
var daysOfHercules = Number(prompt("How many days are  you renting Hercules for?"))
var totalPrice = (daysOfLittleMermaid + daysOfBrotherBear + daysOfHercules) * priceForMoviePerDay;
alert("Your total will be $" + totalPrice);

var googleRate = 400;
var amazonRate = 380;
var facebook = 350;

googleMoney = 400 * 6;
amazonMoney = 380 * 4;
facebookMoney = 350 * 10;
var paycheck = googleMoney + amazonMoney + facebookMoney;
console.log(paycheck);

var classNotFull = true;
var classConflict = true;
var enrolled = classNotFull && classConflict;
var classAt8am = false;
var classSize = 125;
var currentClassSize = 108;
var canRegister = (currentClassSize < classSize) && !classAt8am;

var hasPremium = true;
var cartSize = 6;
var offerValid = true;
var canHaveDiscount = offerValid && (cartSize > 2 || hasPremium);
premiumMember = true;
offerValid = true;
moreThanTwo => 2 && offerValid == true;
