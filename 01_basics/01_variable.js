const accountId  = 144554 
let accountEmail = "shivi@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // Not allowed

/*
Prefer not to use var because of issue in block and functional scope 
*/

accountEmail = "cv@gmail.com"
accountPassword = "93394"
accountCity = "Ranchi"

console.log(accountId);
console.table([accountEmail , accountPassword , accountCity , accountState])
