const userEmail = []

if (userEmail) {
    console.log("got user email");
} else {
    console.log("dont have user email");
}

//falsy value

// false, 0, -0, BigInt 0n, "", null, undefined, Nan

// truthy value
// "0", "false", " ", [], {}, function (){}

// if (userEmail.length === 0) {
//     console.log("array is empty");

// }

const emptyObject = {
    productName: "keyboard",
    price: 123
}
if (Object.keys(emptyObject).length === 0) {
    console.log("empty object");

}

else {
    console.log("not empty");
}

// Nullish Coalescing Operator  (??):   Null undefined

let val1;
// val1 = 5 ?? 10

// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 20 ?? 10

// console.log(val1);

// Terniary Operatior
//  condition ? true : false

const tempreature = 40
tempreature <= 35 ? console.log("cool weather") : console.log("hot weather");









