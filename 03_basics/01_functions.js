function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName() //reference and execution

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);

// }

function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result;
    // console.log("raju");

    return number1 + number2
}

const result = addTwoNumbers(3,5)
// console.log("Result: ", result);

// addTwoNumbers(3, 4)
// addTwoNumbers(3, "4")
addTwoNumbers(3, null)

function loginUserMessage (userName = "sam"){

    if(!userName){ //userName === undefined
        console.log("Please enter username");
        return;
    }
    return ` ${userName} just logged in`
}

// console.log(loginUserMessage("raju"));
console.log(loginUserMessage("rajesh"));