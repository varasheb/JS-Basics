//! Loops in js

//? For loop 
for (let i = 0; i < 5; i++) {
    console.log(i);
  }

//? While loop 
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

//? do..while loop 
// i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

//? for..in loop 
//? object
// const person = { name: 'John', age: 30 };
// for (const key in person) {
//   console.log(`${key}: ${person[key]}`);
// }
const colors = ['red', 'green', 'blue'];
for (const index in colors) {
  console.log(`${index}: ${colors[index]}`);
}
//? string
const str = 'Hello';
for (const index in str) {
  console.log(`${index}: ${str[index]}`);
}

//? for..of loop 
//? array
// const colors = ['red', 'green', 'blue'];
// for (const color of colors) {
//   console.log(color);
// }
const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
  console.log(number);
}

//? string
const fruit='bannana'
for(const ele of fruit){
    console.log(ele)
}

const str1 = 'Hello';
for (const char of str1) {
  console.log(char);
}
  