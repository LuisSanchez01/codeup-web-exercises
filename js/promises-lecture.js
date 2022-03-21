
// Callbacks - functions passed to other functions; so a function can call another
// function; a callback can run after another function has finished running.

// function sayHello(greeting, name){
//     return `${greeting}, ${name}!`;
// }
//
// function displayInput(input){
//     document.getElementById("")
// }
//
// const greeting = sayHello("Mazel Tov", "Jay");
//
// displayInput(greeting);

function myGreeter(greeting, name, outputFunction){
    const salutation = `${greeting}, ${name}!`;
    outputFunction(salutation);
}
function displayInput(input){
    document.getElementById("output").innerHTML = input;
}

// myGreeter("Mazel Tov", "Jay", displayInput);

// Callbacks in async JS  Ex. setTimeout (Look it up for assessment)

// setTimeout(()=>myGreeter(("Aloha", "Dane", displayInput), 2000));

setTimeout(myGreeter, 2000, "Yo", "Dude", displayInput);

// External resources

// function getInfo(outputFunction){
//     const request = $.get("data/inventory.json", function(result){
//         const infoToDisplay = result.data;
//         outputFunction(infoToDisplay);
//     });
// }
// Must pull rows.json to display vehicle info

// getInfo(displayInput);
function displayVehicleInfo(info){
    let html = "";
    info.forEach((car, index) => {
        if (!car[12]||!car[9]||!car[14]||!car[13]) {
            html += '';
        } else {
            html += `<p>${index}:${car[12]} ${car[9]} ${car[14]}${car[13]}</p>`;
        }
    });
    $("#output").append(html);
}

// getInfo(displayVehicleInfo);


// Promises
const ourFirstPromise = new Promise((resolve, reject) => {
   setTimeout(() => {
       if (Math.random() > 0.05){
           resolve("I am resolved!");
       } else{
           reject("I was rejected");
       }
   }, 1000);
});

// ourFirstPromise.then(value => console.log(value)).catch(error => console.log(error));

// fetch("data/rows.json").then(response => response.json()).then
// (info => console.log(info.data)).catch(error => console.log(error));
//
//
// fetch('https://api.github.com/users').then(response => response.json())
// .then(users => {
//     console.log(users);
//     users.forEach(user => {
//         console.log(user.login);
//     })
//     })
// .catch(error => console.log(error));

// Create a new token on github, then place the GITHUB_TOKEN in a const,also
// create a const github_api_base_url = "https://api.github.com";

// fetch(github_api_base_url + "/users/unfaiyted/events/public",
//     {headers: {'Authorization': GITHUB_TOKEN}}).then(response => response.json())
// .then(events => console.log())
// More to the above but must pull