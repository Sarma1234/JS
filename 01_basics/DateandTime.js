let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let MyCreatedDate = new Date("2023-01-14");//YY-MM-DD
console.log(MyCreatedDate.toLocaleString());
let MyCreatedDate = new Date("01-14-2023");//MM-DD-YY
console.log(MyCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(MyCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//'${newDate.getDay()} and the time'
newDate.toLocaleString('default', {
    weekday: "long"
   
})