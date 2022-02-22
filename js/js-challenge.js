// Create a function, analyzeArray, that takes in an array and returns an object with information about the passed array.
// The function should return an object with properties containing information about the array, including the
// lengthOfArray, containsAllStrings, and the combineResult of adding all elements together
//
// analyzeArray([1, 2, 3]) returns...
// {
//     lengthOfArray: 3,
//         containsAllStrings: false,
//     combineResult: 6
// }
// analyzeArray([‘a’, ‘b’, ‘c’]) returns...
// {
//     lengthOfArray: 3,
//         containsAllStrings: true,
//     combineResult: ‘abc’
// }
// analyzeArray([‘bob’, 100, null]) returns...
// {
//     lengthOfArray: 3,
//         containsAllStrings: true,
//     combineResult: ‘bob123null’
// }

var testArray1 = ([1, 2, 3]);
var testArray2 = (["a", "b", "c"]);
var testArray3 = (["bob", 100, null]);

function analyzeArray([input]) {
    if (testArray1 || testArray2 || testArray3 === []) {
        return lengthofArray;
    if (testArray1 || testArray2 || testArray3 === []) {
        return true;
    if (testArray1 || testArray2 || testArray3 === []) {
        return combineResult;
    }
    }
    }
}

console.log(analyzeArray([1, 2, 3]));
console.log(analyzeArray(["a", "b", "c"]));
console.log(analyzeArray(["bob", 100, null]));


