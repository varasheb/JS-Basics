let promise = new Promise(function(resolve, reject) {
  console.log("Hello")
  resolve(56)
})

console.log("Hello One")
setTimeout(function() {
  console.log("Hello Two in 2 seconds")
}, 2000)

console.log("My name is " + "Hello Three")
console.log(promise)


// Fetch google.com homepage  ==> console.log("google.com homepage done")
// Fetch data from the data api 
// Fetch pictures from the server 
// Print downloading 
// Rest of the script 



//!  promise .then() and .catch
let promiseOne = new Promise((resolve, reject) => {
  console.log("Promise is pending")
  setTimeout(() => {
          resolve(true)
  }, 5000)
})

let promiseTwo = new Promise((resolve, reject) => {
  console.log("Promise is pending")
  setTimeout(() => {
          reject(new Error("I am an error"))
  }, 5000)
})

// To get the value
promiseOne.then((value) => {
  console.log(value)
})

// To catch the errors
// promiseTwo.catch((error) => {
//         console.log("some error occurred in p2")
// })

p2.then((value)=>{
  console.log(value) 
},(error)=>{
  console.log(error)
})

//! Promise chaning
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
          console.log("Resolved after 2 seconds")
          resolve(56)
  }, 2000)
})

p1.then((value) => {
  console.log(value)
  return new Promise((resolve, reject) => {
          setTimeout(() => { resolve("Promise 2") }, 2000)
  }) 
}).then((value) => {
  console.log("We are done")
  return 2
}).then((value)=>{
  console.log("Now we are pakka done")
})

  
//!
let promis1 = new Promise(function(resolve,reject){
  resolve("Resolved successfull...");
});
promis1.then((msg)=>{
  console.log(msg);
})

//2
let promis2 = new Promise(function(resolve,reject){
  reject(new Error("Rejected!!!"));
});
promis2.catch((value) => {
  console.log(value);
})

//3
let solution = new Promise((resolve,reject)=>{
  if(resolve){
      resolve("Resolved");
  }else{
      reject("Rejected");
  }
});
solution.then((result)=>{
  console.log(result);
}).catch((result)=>{
  console.log(result);
})

//4
let sum = new Promise((resolve,reject)=>{
  return resolve(3);
});
sum.then((result)=>{
  return result+=3;
}).then((value) => {
  return value+=10;
}).then((value) => {
  value+=4;
  console.log(value);
})

//5
function sqr(a){
  return new Promise((resolve, reject)=>{
      console.log(a*a);
      resolve();
  })
}
sqr(2).then((res)=>{
  sqr(3).then((res)=>{
      sqr(4).then(()=>{})
  })
})
