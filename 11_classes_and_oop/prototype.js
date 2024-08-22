let myHeros = ['thor', 'siderman']


let heroPower = {
    thor: 'hammer',
    spiderman: "sling",

    getSpidermanPower: function () {
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.khan = function () {
    console.log(`khan is present in all objects`);
}

// heroPower.khan()
myHeros.khan();


//inheritance


const user = {
    name: "khan",
    email: "khan@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TaSupport = {
    makeAssignment: "js assignment",
    fullTime: true,
    __proto___: TeachingSupport
}

Teacher.__proto___ = user


// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "js course    "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}
anotherUserName.trueLength();
"khan".trueLength();
"js course".trueLength()
