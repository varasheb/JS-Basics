class Complex {
    constructor(real, imaginary) {
      this.real = real
      this.imaginary = imaginary
    }
    add(num) {
      this.real = this.real + num.real
      this.imaginary = this.imaginary + num.imaginary
  
    }
  
    get real() {
      return this._real
    }
  
    get imaginary() {
      return this._imaginary
    }
  
    set imaginary(newImaginary) {
      this._imaginary = newImaginary
    }
  
    set real(newReal) {
      this._real = newReal
    }
  }
  
  let a = new Complex(2, 4)
  console.log(a.real, a.imaginary)
  a.real = 10
  a.imaginary = 10
  let b = new Complex(6, 2)
  a.add(b)
  console.log(`${a.real}+${a.imaginary}i`)
  //!===========================================
  class Human {
    constructor(name, favfood) {
      this.name = name
      this.favfood = favfood
    }
    walk() {
      console.log(this.name + "Human is walking")
    }
  }
  
  class Student extends Human {
    walk() {
      console.log(this.name + ": Student is walking")
    }
  }
  
  let o = new Student("Harry", "Bhindi")
  o.walk()
  
  console.log(o instanceof Human)
//!===========================================
  const a = async (text, n = 2) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(text)
      }, 1000 * n)
    })
  }
  
  (
    async () => {
      let text = await a("Hello")
      console.log(text)
      text = await a("World")
      console.log(text)
    }
  )()
  
  function sum(a, b, c) {
    return a + b + c
  }
  
  let x = [1, 3, 5]
  console.log(sum(...x));
  
  (async () => {
    let text = await a("I am resolving after 1 second", 1)
    console.log(text)
    text = await a("I am resolving after 4 seconds", 4)
    console.log(text)
  }
  )()
  
  function simpleInterest(p, r, t) {
    return (p * r * t) / 100;
  }
  
  console.log(simpleInterest(100, 5, 1))