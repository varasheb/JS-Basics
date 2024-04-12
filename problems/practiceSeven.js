//Revising topics

//sum of two numbers

function sum(a,b){
    return a+b;
}
// using closure
function add(a){
    return function(b){
        return a+b
    }
}

//find the max value in the array
function max(arr){
    return Math.max(...arr)
}

// console.log(Math.max(1,2,3,4))
// console.log(Math.min(1,2,3,4,5,-4))
// console.log(Math.floor(1.5))
// console.log(Math.random()*100)
// console.log(Math.floor(Math.random()*100))
// random in 0 to 9

// random otp generater
function otp(){
    let otp=""
    for(let i=0;i<6;i++){
        otp=otp+Math.floor(Math.random()*10)
    }
    return otp-0
}
console.log(typeof otp()+" "+otp())
// how to convert string to other data type

//string to number
Number("123")

//number to string
String(123)

//number to boolean
Boolean(0)

//! given string is palindrome

function isPalindrome(str){
    return str===str.split("").reverse().join("")
}
console.log(isPalindrome("racecar"))

//! how to make a string reverse 
const reverseString=(str="helloman")=>str.split('').reverse().join('')
console.log(reverseString())

//! == and === not compitable with decimal number
console.log((0.1+0.2)===0.3)//false