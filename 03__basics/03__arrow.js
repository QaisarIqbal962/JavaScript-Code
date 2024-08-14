const user = {
    name: "qaisar",
    rollNo: "24",

    WelcomeMessage: function () {
        console.log(`${this.name},welcome to js course`);
        console.log(this);
    },
};

// user.WelcomeMessage()
// user.name = "sam"
// user.WelcomeMessage()

// console.log(this);

// function chai() {               // this. context use in object not in function
//     let username = "qaisar"
//     console.log(this.username);

// }

// chai()

// arrow function

// const addTwoNumbers = (num1, num2) => {  use of carli braces return must be write (explicent return)
//   return num1 + num2;
// };

// console.log(addTwoNumbers(4, 4));



const addTwoNumbers = (num1, num2) => (num1 + num2) //use perintices return not use // inplecent return

console.log((addTwoNumbers(5, 6)));
