// //! hoisting a var
console.log(hoistedVar) // initilized to undefined
var hoistedVar = "I am hoisted var";
//! hoisting a let
//console.log(hoistedLet) // reference error not initilized
let hoistedLet = "I am hoisted let"

//! hoisting a function
console.log(hoistedFunction)  // initilized to function
function hoistedFunction(){
    console.log("I am hoisted function");
}

//! hoisting a class
//new hoistedClass()  // reference error not initilized
class hoistedClass{
    constructor(){
        console.log("I am hoisted class");
    }
}
