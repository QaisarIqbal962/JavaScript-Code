// imeditely invoked function expression  (IIFE)
// An IIFE is a JavaScript function that runs as soon as it is defined. It allows for the creation of a private or globle  scope, which helps to avoid polluting the global namespace. 

(function chai() {                                 // named iife
    console.log("DB CONNECTED");
})();

((name) => {                                       // Unnamed iife
    console.log(`db connected,${name}`);          
})("Succesfully")

