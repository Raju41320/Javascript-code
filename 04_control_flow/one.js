// if

const isUserloggedIn = true;
const temperature = 42

if (temperature === 40) {
    console.log("less than 50");
}else{
    console.log(" temperature is greater than 50");
}
console.log("execute");

// <, >, <=, >=, == , != , === 

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }

//console.log(`user power: ${power}`)

const balance = 1000

//  if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log(" less than 500");
// }else if (balance < 700) {
//     console.log(" less than 700");
// }else if (balance < 900) {
//     console.log(" less than 900");
// }else {
//     console.log(" less than 1200");
// }

const userLoggedIn = true 
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromMail = true


if (userLoggedIn && debitCard && 2 === 2) {
    console.log("allowed to buy course");
}

if (loggedInFromGoogle || loggedInFromMail) {
    console.log("user logged in");
}