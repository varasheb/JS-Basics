// suggest me some probles is js

// Problem 1:
// Write a JavaScript program to find the sum of numbers up to n-th number using recursion.
// function sumUptoNth(n) {
//     if (n === 0) {
//         return 0;
//     }
//     return n + sumUptoNth(n - 1);
// }

// console.log(sumUptoNth(5))

// Problem 2:
// Write a JavaScript program to find the sum of all the multiples of 3 or 5 below 1000.

// function sumOfMultiples(n) {
//     let sum = 0;
//     for (let i = 0; i < n; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }

// console.log(sumOfMultiples(1000));


// Problem 3:
// Write a JavaScript program to find the sum of all the even numbers up to n-th number using recursion.
// function sumOfEven(n) {
//     if (n === 0) {
//         return 0;
//     }
//     if (n % 2 === 0) {
//         return n + sumOfEven(n - 1);
//     }
//     return sumOfEven(n - 1);
// }

// Problem 4:
// Write a JavaScript program to find the sum of all the odd numbers up to n-th number using recursion.[/INST]
// function sumOfOdd(n){
//     if(n===0)
//     return 0;
//     if(n%3===0)
//     return n+sumOfOdd(n-1)
//     return sumOfOdd(n-1)
// }

// console.log(sumOfOdd(10))

//how to async with for loop

//async with for loop for pronting 1to6

// const printAsync = async (max) => {
//     for (var i = 1; i <= max; i++) {
//        ((i)=>{ 
//         setTimeout(()=>{
//         console.log(i);
//         })})(i)
//     }
// }

// console.log(printAsync(6))
