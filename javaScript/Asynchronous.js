//Asynchronous functions

setTimeout(demo, 3000);

function demo() {
  console.log("I am demo function");
}

function greet(){
    console.log("welcome to javascript")
}
greet();

//?
setTimeout(demo2, 0);

function demo2() {
    console.log("I am demo function 2");
  }
  
  function greet2(){
      console.log("welcome to javascript 2")
  }
  greet2();