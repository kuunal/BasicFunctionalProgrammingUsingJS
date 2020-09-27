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
let result = numbers.map(number=>number*2) // Map is takin function as argunent
console.log(result)


// Trim the input and add inside of div tags in lower case 
// using functional style
const trimInput = str => str.trim(); 
const wrapInDiv = str => `<div>${str}</div>`
const lower = str => str.toLowerCase()
result = lower(wrapInDiv(trimInput("     HELLO        ")));
console.log(result)


// Currying
const multiply = (firstNum)=> (secondNum) => firstNum *secondNum
console.log(multiply(2)(3))
const firstResult = multiply(2)
const secondResult = firstResult(3)  
console.log(secondResult)

// Average using currying

const calculateAverage = (...numbers)=>{
    let total = 0
    for (number of numbers){
        total += number
    }
    return total/numbers.length
}

const outer = (func, ...numbers)=>{
    return function inner(...additionalNumbers){
        return func.apply(this, additionalNumbers.concat(numbers));
    }

}

const outerResult = outer(calculateAverage, 1,2,3);
const innerResult = outerResult(4,5,6)
console.log(innerResult)


// Immutability- Once created cannot change
// if you want to change create new copy
// JS objects, arrays are not immutable hence JS is not pure FP language 
// Advantages ofn  imutability
// Predictability, Faster change detection, Concurrency
// Cons-
// Perfromance, since object is copied to another object
// Memory overhead- but we can reduce this by using libraries like 
// immutable, immer or basic js techniques like Object.assign or spread operator, slice
// and other array methdos. These things uses structural sharing.

// Immutability practice for objects
const person = {
    name:"asdf",
    age:21,
    address : {
        city:"NY",
        country:"USA"
    }
}
// creating shallow copy
const newPerson = Object.assign({}, person, {name:"qwert"} ); 
console.log(newPerson)
// Another thing we can use is spread operator
const anotherPerson = {...person, name:"zxc"}
console.log(anotherPerson)
// One thing to notice that it creates shallow copy 
const demoPerson = {...person}
//lets change address of demoPerson
// both demoperson and person points to same address changing one will
// affect other.    
demoPerson.address.city="LA" 
console.log(person) // city chaged to LA
// TO avoid this we have to do deep copy i.e
const demoPerson1 = {
    ...person,
    address: {
        ...person.address,
        city: "SF"
    }
}
console.log(demoPerson1)
console.log(person) 

// Immutability practice for Arrays
const array = [1,2,3,"s"]
console.log(array)

// adding items with achieving immutability
const addItemInArray = ["at beg", ...array, "at end"]
console.log(addItemInArray, array) // array is not mutated

// adding items to specific position 
// lets suppose adding at index 2 or before value 3
const index = array.indexOf(3)
const addAtSpecific =  [...array.slice(0, index),
    "new item",
     ...array.slice(index)]
console.log(addAtSpecific, array)

// Change some value from array
let changedArray = array.map(value=>value !== "s" ? value : 4)
console.log(changedArray)

// exclude value from array
changedArray = array.filter(value=> value!=="s")
console.log(changedArray)
const total = array.filter(value=>value!=="s").
            reduce((item, currentTotal)=>item+currentTotal,0)
console.log(total)
