function setUsername(username) {
    //complex DB call
    this.username = username
    console.log("Called");
}

function CreateUser(username, email, password) {
    setUsername.call(this,username)

    this.email = email
    this.password = password
}

const newUser = new CreateUser("khan","khan@gmail.com","12345")
console.log(newUser);