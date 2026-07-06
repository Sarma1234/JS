// Primitive
// 7 types:  String, number, boolean, null, undefined, symbol
//, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const OutsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

//const bigNumber =  34565435766541392873n






//Non Primitives

//Arrays, Objects, Function
// const heros = ["Shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,

// }

// const myFunction = function(){
//     console.log("Hello World");

// }

// console.log(typeof bigNumber);

//++++++++++++++++++++++++++++++++++++++++++++++++
// stack(primitive),heap(non primitive)

let myName = "HarshitaSarma"
let anothername = myName
anothername = "chaiaurcode"

console.log(anothername);
console.log(myName);

let userOne  = {
    email: "user@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "harshita@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
