const user = {
    username : "raju",
    price : 199,

    welcomeMessage : function (){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "manish"
// user.welcomeMessage()

// console.log(this);


// function chai() {
//     let username = "raju"
//     console.log(this.username);
    
// }

//chai()


// const chai = function () {
//     let username = "raju"
//     console.log(this.username);   
// }
// chai()

const chai = () => {
    let username = "raju"
    console.log(this);   
}
//chai()

//+++++++++++++++++ Arrow function +++++++++++++++++++

// const addTwo = (num1 , num2) => {
//     return  num1 + num2
// }

// const addTwo = (num1 , num2) =>  num1 + num2
// const addTwo = (num1 , num2) =>  (num1 + num2)
const addTwo = (num1 , num2) =>  ({username : "raju"})

console.log(addTwo(2,4));

// const myArray = [2,5,6,8,9]

// myArray.forEach(() => {})