// forof loop

// ["", "", ""]
// [{}, {}, {}]

const myarray = ["khan", "superman", "batman"]
for (const num of myarray) {
    console.log(`Name: ${num}`);

}

const greeting = "Hello world"
for (const greet of greeting) {
    console.log(`Each char of greeting is: ${greet}`);

}

// Map

const map = new Map()
map.set('pk', 'pakistan')
map.set('ch', 'china')
map.set('uk', 'united state')
console.log(map);