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

  const Singleton = (() => {
    let instance;
  
    function createInstance() {
      return {

        name: 'Singleton Instance',
        log: () => console.log('Singleton method called')
      };
    }
  
    return {
      getInstance: () => {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      }
    };
  })();
  
  const singletonInstance1 = Singleton.getInstance();
  const singletonInstance2 = Singleton.getInstance();
  
  console.log(singletonInstance1 === singletonInstance2);
  singletonInstance1.log(); 
  
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

  //!Observer Pattern
//   Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
//   Used in event handling systems and for implementing distributed event handling systems

// class Subject {
//     constructor() {
//       this.observers = [];
//     }
  
//     addObserver(observer) {
//       this.observers.push(observer);
//     }
  
//     notifyObservers(data) {
//       this.observers.forEach(observer => observer.update(data));
//     }
//   }
  
//   class Observer {
//     update(data) {
//       console.log('Observer updated with data:', data);
//     }
//   }
  
//   const subject = new Subject();
//   const observer1 = new Observer();
//   const observer2 = new Observer();
  
//   subject.addObserver(observer1);
//   subject.addObserver(observer2);
  
//   subject.notifyObservers('Data to notify');