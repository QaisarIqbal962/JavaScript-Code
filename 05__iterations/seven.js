const MyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,]


// const myNum = MyNumbers.map((num) => num + 10)

const newNum = MyNumbers
    .map((num) => num * 10)
    .map((num) =>  num +1)
    .filter((num) => num >=40)

console.log(newNum);


