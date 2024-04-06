let a = document.getElementsByClassName("container")[0]
a.onclick = () => {
  let b = document.getElementsByClassName("container")[0]
  b.innerHTML = "Hello World!"
}

//?? 
let x = function(event) {
    console.log(event.target)
    alert("Hello World1!")
  }
  
  let y = function(e) {
    console.log(e)
    alert("Hello World2!")
  }
  
  btn.addEventListener('click', x)
  
  // btn.addEventListener('click', y)
  
  // let a = prompt("What is your favorite number?");
  
  
  // if (a == "2") {
  //   btn.removeEventListener('click', x)
  // }
  