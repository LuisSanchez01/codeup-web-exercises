var userInput = prompt("Type in an odd number between 1 and 50");
    for (var i = 1; i < 50; i++) {
        if (i % 2 === 0) {
            continue;
        }
        if (i == userInput) {continue;}
        console.log("Loop counter is: " + i);
        //if (i === numberToSkipIs) {
        //     console.log("We have reached the number to skip; break!");
        //     break;
        //     console.log("This line will not be displayed.");
        // }
    }

