// Functional Programming is a programming paradigms or styles 
// just like OOP. It is just decomposing of problems into small
// and reuseable functions that take some input and returns result.

// Characteristics of FP
// Functions should be first class citizens i.e functions 
// should be objects and hence can be passed as agrument to another functin
// or can be assign to variable and can be returned from another function.
// They don't mutate or change data.
// funciton should not have any side effects i.e It should not change 
// state of application.
// it should not depend upon anything rather than input parameters
// It should not mutate state of object, var, arrays or other datatypes
// Mutation is done on new obejct or new variables, avoiding changing 
// existing var or object. For that various libraries can be used Eg
// Immutable by FB, Immer, etc. Basic JS like spread operator, 
// array method like filter, map, reduce, slice, etc can also be used.
// 


//Advantages
// More predictable
// Easier to test and debug
// more scalable

// Function as First Class Citizen example

// Assigning function to variable
function sayHello(){
    return "Hello World"
}

let fun = sayHello // Assignning function to var
console.log(fun()) // Callin fucntion through var

// Passing funtion as paramter to another funtion
// This actually can be very powerful. This actually opens up for
// many cool things like decorators, Currying, etc.
function greet(otherFunc){
    console.log(otherFunc())
}


// Trim the input and add inside of div tags
// 


const trimInput = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`

const result = wrapInDiv(trimInput("     value        "));

console.log(result)



