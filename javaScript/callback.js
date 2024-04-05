//! call back function

// function Display(s) {
//   console.log(s)
// }

// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }

// myCalculator(8, 4, Display);

//! remove negative number
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}
// Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);
console.log(posNumbers)

