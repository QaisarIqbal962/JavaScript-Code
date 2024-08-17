const coding = ["a", "b", "c", "d"]

// coding.forEach( (items) =>{
//     console.log(items);
// } )


const arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const data = arry.filter((num) => {
    return num < 4
})
console.log(data);



const user = [
    {
        name: 'khan',
        age: 28,
        email: "khan123@gmail.com"
    },
    {
        name: 'qaisar',
        age: 19,
        email: "qaisar@gmail.com"
    },
    {
        name: 'iqbal',
        age: 25,
        email: "iqbal@gmail.com"
    },
    {
        name: 'khan1',
        age: 20,
        email: "khan12@gmail.com"
    },
]

const mydata = user.filter((bk) => {
    return bk.age && age<20
})
console.log(mydata);