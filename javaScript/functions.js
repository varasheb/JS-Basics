//! External Script: Use the src attribute to link an external JavaScript file:

// console.log("Hello world this is External script for js")
// document.write("Hello world this is External script for js")

/** 
 * ! Types of function in js
 * ? 1] Named function
 * ? 2] Anonymous Function
 * ? 3] Arrow function
**/

//? named function
// function add(a,b){
//     return a+b;
// };
// console.log(`the sum of a and b is ${add(4,5)}`);


//? Anonymous Function with function expression
// let greet=function(){
//     console.log("welcome everyone to banglore")
// }
// greet();

//? Arrow Function
// let power=(a,b)=>a**b;
// console.log(power(2,3))
// let square=a=>a**2;

// let subtract=(a,b)=>{
//     return a-b;
// }
//  console.log(`square of a is ${square(4)}`)
//  console.log(`power of a to b ${power(8,3)}`)
//  console.log(`subtract of a and b is ${subtract(4,3)}`)

//  setTimeout((s=square(3))=>console.log(s),0);
//  console.log(subtract(2,4))

//! Function with expression cannot be executed anywhere first we have to declare or define the function then we can call
// display('display');
// let display=function(param){
//     console.log(param)
// }

//! work fine named function can be executed anywhere in the code
// printMe("hello hi can execute");
// function printMe(parm){
//     console.log(parm)
// }
//! can execut 2 times
// printMe()
// function printMe(){
//     console.log("Hello")
// }

//? rest parameter can have only one rest parameter which should be last it can accept any no. of argument and it is stored in array

// function collectThings(x,...y){
//     console.log(x)
//     console.log(y)
// }
// collectThings(1,2,3,4,5,6,7,8,9)
// collectThings(1,NaN,1,'hi')

//? closure in js are nothing but a closure gives you access to an outer function's scope from an inner function.

// function outer(x){
//     function inner(y){
//         let z=x+y;
//         var a=x;
//         const b=y;
//         return x+y;
//     }
//     console.log(a,b)
//     return inner
// }

// let outerReturn=outer(10)//  return a inner function
// console.log(outerReturn)
// console.log(outerReturn(2))// calling the inner function by outer function

//? callback function
//? a callback function is a function that is passed as an argument to another function, and it is executed after some operation has been completed

//? Higher oder function or HOF 
//? are functions that operate on other functions, either by taking them as arguments or by returning them.

// function higherOrderFunction(callback) {
//     console.log("This is the higher-order function.");
//     callback();
//   }
  
//   function callbackFunction() {
//     console.log("This is the callback function.");
//   }
  
//   higherOrderFunction(callbackFunction);

//? pure function is a function the ouput remain same for the same input
// function greet(name){
//     console.log('Hello :'+ name)
// }
// greet('rahul')

//? IIFE
// (function (){
// console.log('IIFE')
// })()

//? Recurssion function
// function featchwater(count){
//     if(count===0){
//         return;
//     }
//     console.log('Featching Water!!!')
//     featchwater(count-1)
// }
// featchwater(4)


//  reverse  the word
let str="hi how are you"

function reverseTheString(str){
    let rev="";
let arr=str.split(" ")
for(let words of arr){
for(let ele of words ){
 rev=ele+rev
}
rev=rev+" "
}
console.log(rev)
}

reverseTheString(str)