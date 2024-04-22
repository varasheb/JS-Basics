class CustomSet {
    constructor() {
        this.set = {};
    }

    add(value) {
        this.set[value] = true;
    }

    delete(value) {
        delete this.set[value];
    }

    // Check if a value exists in the set
    has(value) {
        return this.set[value] === true;
    }

    size() {
        return Object.keys(this.set).length;
    }

    values() {
        return Object.keys(this.set);
    }

    clear() {
        this.set = {};
    }
}


let mySet = new CustomSet();
mySet.add("apple");
mySet.add("banana");
mySet.add("orange");
mySet.add("mango");
mySet.add("apple");
console.log(mySet.values()); 

console.log(mySet.has("apple")); 
console.log(mySet.size()); 

mySet.delete("banana");
console.log(mySet.size()); 

console.log(mySet.values()); 

mySet.clear();
console.log(mySet.size()); 
