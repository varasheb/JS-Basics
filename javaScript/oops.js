//! Inheritance
// console.log("********Inheritance******")

// class Person {
//     constructor(name) {
//       this.name = name;
//     }
  
//     introduceSelf() {
//       console.log(`My name is ${this.name}.`);
//     }
//   }
// class Professor extends Person {
//     teaches;
  
//     constructor(name, teaches) {
//       super(name);
//       this.teaches = teaches;
//     }
//   }
  
// const walsh = new Professor("Walsh", "Psychology");
// walsh.introduceSelf(); // 'My name is Walsh, and I will be your Psychology professor'


//! Encapsulation
// console.log("************Encapsulation***************")
// class Student{
//     #year;
  
//     constructor(name, year) {
//       super(name);
//       this.#year = year;
//     }
  
//     introduceSelf() {
//       console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
//     }
  
//     canStudyArchery() {
//       return this.#year > 1;
//     }
//   }

// const summers = new Student("varshab", 2);

// summers.introduceSelf(); // Hi! I'm varshab, and I'm in year 2.
// summers.canStudyArchery(); // true

// //summers.#year; // SyntaxError
// console.log("*************")
// class employee{
//     constructor(name){
//       this.name=name
//     }
// }
// let e=new employee("lulu")
// console.log(e.name)


  
//! Polymorphism
// class Animal {
//     constructor(name) {
//       this.name = name;
//     }
  
//     makeSound() {
//       throw new Error('makeSound method must be implemented');
//     }
//   }
  

//   class Dog extends Animal {
//     makeSound() {
//       return 'Woof!';
//     }
//   }
  
//   class Cat extends Animal {
//     makeSound() {
//       return 'Meow!';
//     }
//   }
  
//   // Step 3: Use the common interface
//   function animalSound(animal) {
//     return animal.makeSound();
//   }
  
//   // Usage
//   const dog = new Dog('Buddy');
//   const cat = new Cat('Whiskers');
  
//   console.log(animalSound(dog)); // Output: Woof!
//   console.log(animalSound(cat)); // Output: Meow!
  
//! abstraction
// // Parent object constructor
function Animal(name) {
  this.name = name;
}

// Adding a method to the prototype
Animal.prototype.makeSound = function() {
  throw new Error("Abstract method 'makeSound' must be implemented");
};

// Child object constructor
function Dog(name) {
  Animal.call(this, name);
}

// Inheriting from the parent prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Implementing the abstract method
Dog.prototype.makeSound = function() {
  return "Woof!";
};

// Creating a new Dog object
let myDog = new Dog("Buddy");

// Using the method
console.log(myDog.makeSound()); // Output: "Woof!"
