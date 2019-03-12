const fs = require('fs')

let person = {
    name: "Adele",
    age: "17",

}

const personJSON = JSON.stringify(person)

fs.writeFileSync('person.json', personJSON)

const dataBuffer = fs.readFileSync('person.json')

console.log(dataBuffer)
