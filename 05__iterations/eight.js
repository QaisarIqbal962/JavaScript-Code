const myNum = [1, 2, 3]

//  const total = myNum.reduce( function(accu,currentValue){
//     console.log(`acc: ${accu} and currentValue ${currentValue}`);
//     return accu  + currentValue
//  },0)
//  console.log(TransformStreamDefaultController);

const newNum = myNum.reduce((acc, currentValue) => acc + currentValue, 0)
console.log(newNum);

const shoppingCart = [
    {
        courseName: "js",
        price: 1200
    },
    {
        courseName: "pyton",
        price: 900
    },
    {
        courseName: "java",
        price: 600
    }
]

const Cart = shoppingCart.reduce((accumulator, item) => accumulator + item.price, 0)
console.log(Cart);