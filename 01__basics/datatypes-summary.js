//   Primitive datatypes

//  7 types : String , Number, Boolean , null, undefined, Symbol, BigInt

const score = 100     // no needs to define it's type
const scoreValue = 100.3

const isLoggedIn = false
const outsideTem = null
let userEmail;


// Symbol declaration:




// Reference  (non primitive) datatypes

// 3 types : Array, Object,function

// const friends = ["khan", "khan2", "khan3"]

// let myObj = {
//      Name: Iqbal,
//      age: 22,

// }

// const myFunction = function () {
//      console.log("welcome Back");
// }

// console.log(typeof fmyFunction);



// Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time.

//     ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//     Stack (primitive) , Heap(Non Primitive)


let myName = "Qaisar"
let anotherName = "myName"
anotherName = "Iqbal"
console.log(myName);
console.log(anotherName);

let userOne = {
     email: "user@google.com",
     age: 22
     
}

let userTwo = userOne
userTwo.email = "qaisar@google.com"

console.log(userOne);
console.log(userTwo);    
console.log("to the beyond of t he vs code")







