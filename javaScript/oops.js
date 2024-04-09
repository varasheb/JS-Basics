//! Inheritance
console.log("********Inheritance******")
class Professor extends Person {
    teaches;
  
    constructor(name, teaches) {
      super(name);
      this.teaches = teaches;
    }
  
    introduceSelf() {
      console.log(
        `My name is ${this.name}, and I will be your ${this.teaches} professor.`,
      );
    }
  
    grade(paper) {
      const grade = Math.floor(Math.random() * (5 - 1) + 1);
      console.log(grade);
    }
  }
  
const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Walsh, and I will be your Psychology professor'

walsh.grade("my paper"); // some random grade

//! Encapsulation
console.log("************Encapsulation***************")
class Student extends Person {
    #year;
  
    constructor(name, year) {
      super(name);
      this.#year = year;
    }
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
    }
  
    canStudyArchery() {
      return this.#year > 1;
    }
  }

const summers = new Student("Summers", 2);

summers.introduceSelf(); // Hi! I'm Summers, and I'm in year 2.
summers.canStudyArchery(); // true

//summers.#year; // SyntaxError
console.log("*************")
class employee{
    constructor(name){
      this.name=name
    }
}
let e=new employee("lulu")
console.log(e.name)

//! Abstraction
// Step 1: Define a constructor function
function Animal(name) {
    this.name = name;
  }
  
  // Step 2: Add methods to the prototype
  Animal.prototype.makeSound = function() {
    throw new Error('This method must be implemented by subclasses');
  };
  
  // Step 3: Implement the abstraction
  function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
  }
  
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  Dog.prototype.makeSound = function() {
    return 'Woof!';
  };
  
  function Cat(name, color) {
    Animal.call(this, name);
    this.color = color;
  }
  
  Cat.prototype = Object.create(Animal.prototype);
  Cat.prototype.constructor = Cat;
  
  Cat.prototype.makeSound = function() {
    return 'Meow!';
  };
  
  // Usage
  const myDog = new Dog('Buddy', 'Labrador');
  console.log(myDog.name + ' says ' + myDog.makeSound()); // Output: Buddy says Woof!
  
  const myCat = new Cat('Whiskers', 'Orange');
  console.log(myCat.name + ' says ' + myCat.makeSound()); // Output: Whiskers says Meow!
  
//! Polymorphism
// Step 1: Define a base class
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    // Common method
    makeSound() {
      throw new Error('makeSound method must be implemented');
    }
  }
  
  // Step 2: Create subclasses
  class Dog extends Animal {
    makeSound() {
      return 'Woof!';
    }
  }
  
  class Cat extends Animal {
    makeSound() {
      return 'Meow!';
    }
  }
  
  // Step 3: Use the common interface
  function animalSound(animal) {
    return animal.makeSound();
  }
  
  // Usage
  const dog = new Dog('Buddy');
  const cat = new Cat('Whiskers');
  
  console.log(animalSound(dog)); // Output: Woof!
  console.log(animalSound(cat)); // Output: Meow!
  