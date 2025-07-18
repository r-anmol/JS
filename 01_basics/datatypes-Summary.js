//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

let name = "Anmol"

const score = 100
const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp = null

let userEmail;



const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Anmol",
    age: 19,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//********************* Memory *********************

// 1. Stack memory (used in all Primitive data type)

// 2. Heap memory  (used in all Non-Primitive data type)

let myName = "Jesse"

let anotherName = myName
anotherName = "Anmol"

console.log(anotherName);
console.log(myName);

let userOne = { 
    Email: "yoyo@google.com"

}

let userTwo = userOne

userTwo.Email = "anmol@google.com"

console.log(userTwo.Email);
console.log(userOne.Email);
