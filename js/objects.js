// function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        firstName: "Luis",
        lastName: "Sanchez",
        sayHello: function (input) {
            console.log(input);
        }
    }
    person.sayHello("Hello from Luis Sanchez!");
    console.log(person.firstName);
    console.log(person.lastName);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // var shoppers = [
    //     {name: 'Cameron', amount: 180, discountPercentage: 0, amountAfterDiscount: 180},
    //     {name: 'Ryan', amount: 250, discountPercentage: 12, amountAfterDiscount: 220},
    //     {name: 'George', amount: 320, discountPercentage: 12, amountAfterDiscount: 281.6}
    //     ]
    //
    // shoppers.forEach(function (name) {
    //     console.log(name);
    // });




    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
//     var books = [
//         {bookTitle: "The Salmon of Doubt", authorFirstName: "Michael", authorLastName: "Jordan"},
//         {bookTitle: "Douglas", authorFirstName: "Kobe", authorLastName: "Bryant"},
//         {bookTitle: "Adams", authorFirstName: "Scottie", authorLastName: "Pippen"},
//         {bookTitle: "Winning the lottery", authorFirstName: "Luis", authorLastName: "Sanchez"},
//         {bookTitle: "Billy Madison", authorFirstName: "Adam", authorLastName: "Sandler"},
// ]
//         console.log(books[0]);
//         console.log(books[1]);
//         console.log(books[2]);
//         console.log(books[3]);
//         console.log(books[4]);




    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

//     var books = [
//         {bookNumber:0, bookTitle: "The Salmon of Doubt", Author: "Michael" + " Jordan"},
//         {bookNumber:1, bookTitle: "Douglas", Author: "Kobe" + " Bryant"},
//         {bookNumber:2, bookTitle: "Adams", Author: "Scottie" + " Pippen"},
//         {bookNumber:3, bookTitle: "Winning the lottery", Author: "Luis" + " Sanchez"},
//         {bookNumber:4, bookTitle: "Billy Madison", Author: "Adam" + " Sandler"},
//     ]
// console.log(books[0]);
// console.log(books[1]);
// console.log(books[2]);
// console.log(books[3]);
// console.log(books[4]);

// var books = [
//     {
//         title: '1984',
//         author: {
//             firstName: 'George',
//             lastName: 'Orwell'
//         }
//     },
//     {
//         title: 'Book 2',
//         author: {
//             firstName: 'FirstName2',
//             lastName: 'LastName2'
//         }
//     },
//     {
//         title: 'Book 3',
//         author: {
//             firstName: 'FirstName3',
//             lastName: 'LastName3'
//         }
//     },
//     {
//         title: 'Book 4',
//         author: {
//             firstName: 'FirstName4',
//             lastName: 'LastName4'
//         }
//     }
// ];
//
// for (var i = 0; i < books.length; i++) {
//     var bookMsg = 'Book # ' + (i + 1) + '\n' +
//         'Title: ' + books[i].title + '\n' +
//         'Author: ' + books[i].author.firstName + ' ' + books[i].author.lastName + '\n' +
//         '---';
//     console.log(bookMsg);
// }



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


