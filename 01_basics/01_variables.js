const accountId = 144553
let accountEmail = "Shreyas@google.com"
var accountPassword = "12345"
accountCity = "Nagpur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "sh@rc.com"
accountPassword = "234656261"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])