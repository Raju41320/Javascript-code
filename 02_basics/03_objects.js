//singleton

//object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "raju",
    "full name" : "raju borkute",
    mySym : "myKey1",
    age : 22,
    location :"bangalore",
    email : "raju@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "ganesh@chatgpt.com";
Object.freeze(jsUser);
jsUser.email = "ganesh@micro.com";
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());