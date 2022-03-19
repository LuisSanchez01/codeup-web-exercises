const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
// Example
// const bestShow = arrayOfTVShows.filter((show) => show.imdbScore >= 9 && show.firstEpisodeYear >= 2008)
//
// console.log("bestShow:", bestShow);

const threeLanguages = users.filter((languages) => languages.languages.length >= 3)
console.log("threeLanguages:", threeLanguages);

// Use .map to create an array of strings where each element is a user's email address

const usersEmail = users.map(({email}) => email);
console.log("usersEmail:", usersEmail)

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can
// use the result to calculate the average.

const usersYearsOfExperienceSum = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);
// const averageYears = users.reduce((usersYearsOfExperienceSum, num) => {
//     return usersYearsOfExperienceSum / 5;
// })
const array = [5, 6, 7, 8, 9]
     const average = array.reduce(function (avg, value, _, { length }) {
        return avg + value/ length;
    }, 0);

console.log(average);

console.log("usersYearsOfExperienceSum:", usersYearsOfExperienceSum);
// console.log("averageYears:", averageYears);


// Use .reduce to get the longest email from the list of users.

// const longestEmail = users.reduce((email, user) => {
//     if (user.email.length <= email.length) {
//         if (user.email.length < email.length) {
//             return email;
//         }
//     } else {
//         return user.email;
//     }
// },'')
//
// console.log("longestEmail:", longestEmail)

// ternary operator to get result


// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, ' +
// 'luis, zach, fernando, justin.

const singleString = users.reduce((email, user) => {
    if (user.email.length > email.length) email.push(user)
    return email + user.email;
}, 0);

console.log("singleString:", singleString)