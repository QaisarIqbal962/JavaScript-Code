const accountId = 122893
let accountEmail = "qaisar@gmail.com"
var accountPassword = 12345
accountCity = "Peshawar"

//accountId = 2// not allowed
 accountEmail = "iqbal @gmail.com"
 accountPassword = 12345678
 accountCity = "kohat"

console.log(accountId)
/*
prefer not to use var
because of issue in block scop and functional scope.
*/ 

console.table([accountId,accountEmail,accountPassword,accountCity])