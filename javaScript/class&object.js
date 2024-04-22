
//! objects
const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio() {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };
  
  
  person.name;
  person.name[0];
  person.age;
  person.bio();
  // "Bob Smith is 32 years old."
  person.introduceSelf();
  // "Hi! I'm Bob."
  

  //? syntax
  const objectName = {
    member1Name: member1Value,
    member2Name: member2Value,
    member3Name: member3Value,
  };
  
//! prototype
// __defineGetter__(prop, getter): Defines a getter function for the specified property.
// __defineSetter__(prop, setter): Defines a setter function for the specified property.
// __lookupGetter__(prop): Returns the getter function for the specified property.
// __lookupSetter__(prop): Returns the setter function for the specified property.
// __proto__: A property that allows an object to access its prototype.
// city: An example of a regular property that could exist on an object.
// constructor: A property that references the constructor function that created an instance of an object.
// greet: An example of a regular method that could exist on an object.
// hasOwnProperty(prop): Returns a boolean indicating whether the object has the specified property as its own property (not inherited).
// isPrototypeOf(obj): Returns a boolean indicating whether the object is a prototype of the specified object.
// propertyIsEnumerable(prop): Returns a boolean indicating whether the specified property is enumerable.
// toLocaleString(): Returns a string representing the object. This method is intended to be overridden by derived objects for locale-specific behavior.
// toString(): Returns a string representing the object.
// valueOf(): Returns the primitive value of the specified object.

let str=new String("hello");
console.log("1")
console.log(str.toString())


//! class 
console.log("*******class*********")

class Animal {
    sleep() {
      console.log("zzzzzzz");
    }
  }
  
  const spot = new Animal();
  spot.sleep();
//*

class Person {
    name;
  
    constructor(name) {
      this.name = name;
    }
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}`);
    }
  }

  
  const patrick = new Person("patrick");

  patrick.introduceSelf();
  console.log(patrick.name)
  
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
console.log('*************************')


