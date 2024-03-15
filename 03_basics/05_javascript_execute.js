//

let val1 = 10
let val2 = 5

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2)
let result2 = addNum(4, 77)

/* 

1) global execution  -> this

2) Memory phase  
val1 -> undefined
val2 -> undefined
addNum -> defination
result1 -> undefined
result2 -> undefined

3)Execution Phase 
val1 <- 10
val2 <- 5
addNum <- (new variable environment + execution thred)  <- deleted
result1 <- 15
result2 <- 15

*/

function one (){
    console.log("one")
    }
    
function two (){
    console.log("two")
}
    
function three (){
    console.log("three")
}
    
one () 
two () 
three ()