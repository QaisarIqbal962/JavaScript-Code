// const user1 = {
//     username: "khan",
//     email: "khan@gmail.com",

//     loginCount: 3,
//     signedIn: true,

//     getUserDetails: function () {
//         // console.log(`username: ${this.username}`);
//     }
// }
// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, age, email) {
    this.username = username;
    this.age = age;
    this.email = email;

    return this

}
const userOne = new User("khan", 18, "khan@gmail.com")
const userTwo = new User("iqbal", 22, "iqbal@gmail.com")
console.log(userOne);
console.log(userTwo);

// note:    new keyword => first create empty object. called instance
// 1 new object created
// 2 constructor function called through new keyword.create new argument and pack inside object and execute.
// 3 this keyword inject argument in object
// 4 show you a result