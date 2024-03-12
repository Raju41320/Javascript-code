const accountId = 2000
let accountEmail = "rajuborkute2000@gmail.com"
var accountPassword = "12345"
accountCity = "Bangalore"
let accountState;

// accountId = 2 // not allowed


accountEmail = "raj@gmail.com"
accountPassword = "21212121"
accountCity = "Nagpur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])