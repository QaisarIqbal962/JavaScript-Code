// function SayMyName(){
//     console.log("Q");
//     console.log("a");
//     console.log("i");
//     console.log("s");
//     console.log("a");
//     console.log("r");
// }

// SayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);

// }

// const result = addTwoNumbers(3, 5)
// console.log("result:", result);

function addTwoNumbers(number1, number2) {
    let result = number1 + number2;
    return result;
}

const result = addTwoNumbers(4, 5);
// console.log("result:", result);

function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("please enter  username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("qaisar"));


function CalculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(CalculateCartPrice (100,200,300,500));

const user = {
    productName: "keyboard",
    price: 300

}

function handleObject(anyobject) {
    console.log(`Product name is ${anyobject.productName} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    productName: "mouse",
    price: 200
})


const myArray = [100,200,300,400]

function returnSecondValue (arr) {
    return arr[2]
}

console.log(returnSecondValue(myArray));