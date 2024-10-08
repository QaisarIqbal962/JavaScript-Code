function multipleBy5(num) {
    return num * 5
}

multipleBy5.power = 2
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score) {
    this.username = username;
    this.score = score
}

createUser.prototype.increment = function () {
    this.score++
}
createUser.prototype.printMe = function () {
    console.log(`the price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)
chai.printMe()


/*

Her's what happened behind the scenes when the new keyword is used:

A new object is created: the new keyword is initiates the creation of the new javascript object.

A prototype is linked: The newly created object gets link to the prototype property of  the constructor function.thats mean that it has access to properties and methods defined on the constructor prototype.


The constructor is called: the constructor function is called with the specified arguments and this is bound to the newly created object. if no explicit return value is specified from the constructor.javascript assumes this,this the newly created object to be the intended return value.

the new object is returned: After the constructor function has been called,if it doesn't return a non permeative value(object,array,function etc), the newly created object is returned.











*/