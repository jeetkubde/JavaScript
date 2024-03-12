const accountId = 12365563
let accountEmail = "jeet@gmail.com"
var acccountPassword = "123654"
accountCity = "amt"
let accountState;


// accountId = 2 not allowed 
accountEmail = "jk@gmail.com"
acccountPassword = "akola"
accountCity ="mumbai"

console.log(accountId);

/* prefer not to use var because  of issue in block scope andfunctional scope */

console.table([accountId, accountEmail,  acccountPassword, accountCity,accountState])

