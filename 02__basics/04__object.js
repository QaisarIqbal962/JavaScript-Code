const tenderUser1 = new Object() //....singleton object.
const tenderUser2 = {}            //....non singleton object

tenderUser1.id = "123abc"
tenderUser1.name = "qaisar"
tenderUser1.email = "khan@google.com"
tenderUser1.isLoggedIn = true

// console.log(tenderUser1);

const regularUser = {
    email: "abc@gmail.com",
    fullName: {
        userFullName: {
            firstName: "qaisar",
            lastName: "iqbal"
        }

    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 2: "b", 3: "c" }
const obj4 = { 3: "a", 5: "d" }

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = { ...obj1, ...obj2 }
console.log(obj3);

const user = [
    {
        id: 1,
        email: "khan@gmail.com"
    },
    {
        id: 2,
        email: "xyz@gmail.com"
    },
    {
        id: 3,
        email: "abc@google.com"
    },

]

// console.log(user[0].email);
// console.log(Object.keys(tenderUser1));
// console.log(Object.values(tenderUser1));
// console.log(Object.entries(tenderUser1));

// console.log(tenderUser1.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "js course",
    price: "999",
    courseInstructor: "mansoor nasir",


}

// const {courseInstructor:teacher} = course
// console.log(teacher);

const { courseInstructor: instructor } = course
console.log(instructor);

// {
//     "name": "qaisar"
//     "courseName": "js hindi"
//     "price": "free"
// }

[
    {},
    {},
    {},
]