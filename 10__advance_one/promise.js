const promiseOne = new Promise((resolve, reject) => {
    // Do an async
    // DB calls, cryptography, network
    setTimeout(() => {
        // console.log('async task is completed');
        resolve()
    }, 1000)
})

promiseOne.then(() => {
    // console.log("promise consumed");
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("async task two");
        resolve();
    }, 1000);
}).then(() => {
    // console.log("hello the task two is resolved");
})


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ user: "khan", email: "khan@gmail.com" })
    }, 1000);
})
promiseThree.then((e) => {
    // console.log(e);
})



const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {

            resolve({ userName: "iqbal", password: "123" })
        } else {
            reject("ERROR: something went wrong");
        }
    }, 1000);
})


promiseFour
    .then((user) => {
        // console.log(user);
        return user.userName
    })
    .then((userName) => {
        // console.log(userName);
    })
    .catch((error) => {
        // console.log(error);
    })
    .finally(() => console.log('the promise are either resolve or rejected'))



const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ userName: "javaScript", password: "123" })
        }
        else {
            reject("ERROR: js went wrong");
        }
    }, 1000);
})
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        // console.log(response);
    }
    catch (error) {
        // console.log(error);
    }

}
consumePromiseFive();


// async function allUserData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);

//     } catch (error) {
//         console.log('Error', error);
//   }

// }
// allUserData();
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json()
        console.log(response);
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error));
