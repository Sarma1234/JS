let score = 33

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
//"33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);
//1 => true; 0 = > false
// "" => false
// "hitesh" => true

let someNumber  = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)


// *****************Operations******************//

let value  = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);

let str1 = "hello"
let str2 = "Harshita"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1"+2+2);// agar string first me hai toh pure ko string ki tarah treat kiya jayega
console.log(1+2+"2"); // agar string last me hai toh pehle jo numbers ke operation hai woh hoga uske baad 
console.log((3 + 4) *5 % 3);

console.log(+true);
//console.log(true+); // not applicable 

let num1, num2, num3

num1 = num2 = num3 = 2+2 //not allowed in  most companies

let gameCounter = 100
//gameCounter++;
++gameCounter;
console.log(gameCounter);