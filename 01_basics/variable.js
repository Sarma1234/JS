const account_ID = 123211
let accountEmail = "harshita@gmail.com"
var accountPassword = "12345"
accountCity = "Banglore"
let accountState;
//accountID = 2 // not allowed

/* Prefer not to use var because of issue in block scope 
and functional scope

const and let are used mostly

can be declared without variable
*/
accountEmail = "hc@hc.com"
accountPassword = "2341221"
accountCity = "Hyderabad"

console.log(account_ID);
console.table([account_ID, accountEmail, accountPassword, accountCity, accountState])
