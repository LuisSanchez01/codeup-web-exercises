// function showMultiplicationTable(number) {
//     var output = ""
//     for(let x = 1; x < 10; x++ ){
//      output += "multiply" + x;
//     }
//     return output;
// }
//
// console.log(showMultiplicationTable(7));

//Other way

// function showMultiplicationTable(number) {
//     for(var multiplier = 1; multiplier <=10; multiplier++) {
//         console.log(number + " x " + multiplier + " = " + number * multiplier);
//     }
// }
// showMultiplicationTable(7);
//
// var randomNum = Math.floor(Math.random() * 181) + 20;
//
// for (var i = 0 ; i < 500; i++) {
//     var randomNum = Math.floor(Math.random() * 180) + 20;
//     if (randomNum < 20 || randomNum > 200) {
//         console.log(("yooooooo"));
//     } else if (randomNum === 20 || randomNum === 200) {
//         console.log("hheeyyy");
//     }
//     console.log(randomNum);
// }


// I take a number, say 3
// I know I have to concatenate numbers
// Which means they have to be a string -- "numeric string"
// I'm going to start with an empty string
// I'm going to concatenate the numeric string to the empty string
// I'm going to store the result of the concatenation in a variable and concatenate to that stored variable

// for (var number = 1; number < 10; number++) {
//     var count = 0;
//     var outputString = "";
//     while (count < number) {
//         outputString = outputString + number.toString();
//         count = count + 1;
//     }
//     console.log(outputString);
// }


for(var i = 100 ; i >= 5; i -= 5){
    console.log(i);
}


