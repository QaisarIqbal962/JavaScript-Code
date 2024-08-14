
let a = 300

if (true) {
    let a = 10
    // const b = 20
    // console.log("inner:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);



// Nested scope


function one() {
    const username = "qaisar"

    function two() {
        const website = "youtube"
        // console.log(username);
    }

    // console.log(website);
    two()

}
one()

if (true) {
    const username = "qaisar"
    if (username === "qaisar") {
        const website = "youtube"
        // console.log(username + website);

    }
}

// +++++++++++++++++++++++++++++++++=interesting+++++++++++++++++++++++++

console.log(addone(5));
function addone (num){
    return num + 1
}


addTow(7)
const addTow = function (num){
    return num + 2

}


