// singleton    =declare literal not a singleton.constructor = singleton
// Object.create


const mySymbol = Symbol("key1")

const JsUser = {
    name: "Qaisar",
    age: 20,
    email: "qaisar@google.com",
    [mySymbol]: "key1",
    location: "pakistan",
    isLoggedIn: false,
    lastLoggedIn: ["monday", "Friday", "saturday"]
}

// console.log(JsUser);
// console.log(JsUser.email);
// console.log(JsUser["lastLoggedIn"]);
// console.log(JsUser[mySymbol]);


JsUser.age = 22
// console.log(JsUser);
// Object.freeze(JsUser)
JsUser.email = "iqbal@google.com"
// console.log(JsUser["email"]);

JsUser.myf = function () {
    console.log("hello  js user");
}
JsUser.myf2 = function () {
    console.log(`hello js user, ${this.name}`);
}

console.log(JsUser.myf());
console.log(JsUser.myf2());

