


//write a function that in a number and returns that number plus itself

function numberPlusItself(number) {
    return number + number;
}


// Write a function that takes in two numbers, doubles each number, and then returns the sum of both numbers doubled

function sumOfDoubles(number1, number2) {
    return (number1 * 2) + (number2 * 2);
}


// Write a function that takes in a number and squares it (that is, returns that number multiplied by itself)

function squareANumber(number) {
    return number * number;
}


// Write a function that takes in a string and returns its length

function stringLength(string) {
    return string.length;
}

// Write a function that takes in two strings and returns the sum of their lengths

function sumOfStringLengths(string1, string2) {
    return string1.Length + string2.length;
}

// Write a function that takes in a number and returns the string "even" or "odd" depending on whether the number is even or odd

function oddOrEven(number) {
    if (number % 2 === 0){
        return "even";
    } else {
        return "odd";
    }
}