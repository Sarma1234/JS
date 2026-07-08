//const tinderUser  = new Object() // singleton 
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firsrname: "Harshita",
            lastname: "Sharma"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)