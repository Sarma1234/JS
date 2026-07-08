//object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Harshita",
    "full name ": "Harshita Sharma",
    [mySym]: "mykey1",  // square bracket laga denge toh ye automatically bol dega ki
    // mai ek symbol  key hu
    age: 22,
    location: "Delhi",
    email: "harshita@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])


//values access (.)notation se
// values change ke liye equal use kr sakte hai

JsUser.email = "harshita@chatgpt.com";
Object.freeze(JsUser) // ab object me koi change nhi hoga
JsUser.email = "harshita@microsoft.com";
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JsUSer");
}

JsUser.greetingTwo = function(){
    console.log('Hello Js user, ${this.name}')
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

//In most of the cases values are accessed using dot(.) only.
//But there are some exceptional cases where square bracket is used[]
