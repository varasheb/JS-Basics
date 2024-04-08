//! modular pattern
// Encapsulates code into modules with private methods and variables.
// Helps to create namespaces, prevent pollution of the global namespace, and achieve data encapsulation.

const Module = (() => {
    const privateVariable = 'Private data';
  
    const privateMethod = () => {
      console.log('Private method called');
    };
  
    return {
      publicMethod: () => {
        privateMethod();
        console.log('Public method called');
      }
    };
  })();
  console.log()
  Module.publicMethod(); 

  //!Singleton Pattern
//   Ensures that a class has only one instance and provides a global point of access to it.
//   Useful for managing shared resources and global configurations.

//   const Singleton = (() => {
//     let instance;
  
//     function createInstance() {
//       return {

//         name: 'Singleton Instance',
//         log: () => console.log('Singleton method called')
//       };
//     }
  
//     return {
//       getInstance: () => {
//         if (!instance) {
//           instance = createInstance();
//         }
//         return instance;
//       }
//     };
//   })();
  
//   const singletonInstance1 = Singleton.getInstance();
//   const singletonInstance2 = Singleton.getInstance();
  
//   console.log(singletonInstance1 === singletonInstance2);
//   singletonInstance1.log(); 
  
  //!Factory Pattern
//   Encapsulates object creation logic into a separate factory method.
//   Allows for the creation of objects without specifying the exact class of object that will be created.

// class Product {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   class ProductFactory {
//     createProduct(name) {
//       return new Product(name);
//     }
//   }
  
//   const factory = new ProductFactory();
//   const product = factory.createProduct('Example Product');
  
//   console.log(product.name); 

 //! Decorator Pattern: Adds new functionality to an existing object without altering its structure. It's useful for adding features to objects dynamically.
class Car {
    constructor() {
        this.price = 10000;
    }

    getPrice() {
        return this.price;
    }
}

function carWithAC(car) {
    car.price += 2000;
    return car;
}

function carWithPowerLocks(car) {
    car.price += 500;
    return car;
}

let myCar = new Car();
myCar = carWithAC(myCar);
myCar = carWithPowerLocks(myCar);
