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
console.log(fun()) // Callin fucntion later through var


// Passing funtion as paramter to another funtion
// This actually can be very powerful. This actually opens up for
// many cool things like decorators, Currying, etc.
function greet(otherFunc){
    console.log(otherFunc())
}
greet(sayHello) // Passing function without calling


// Returning fucntion from other fiunctios
function welcome(){
    return function (){
        return "Welcome"
    }
} 
let fn = welcome(); // Will return anonymous func
console.log(fn()) // Calling anonymous func

// The functions which take other function as parameter or return
// other funtions are called as High order funcction Because instead
// of dealing with string, booleans , etc it deals with functions.
// Real time example
let numbers = [1,2,3]
result = numbers.map(number=>number*2) // Map is takin function as argunent
console.log(result)

