export class CustomMap {
    constructor() {
        this.map = {};
    }


    set(key, value) {
        this.map[key] = value;
    }


    get(key) {
        return this.map[key];
    }

    // Check if key exists in the map
    has(key) {
        return key in this.map;
    }


    delete(key) {
        delete this.map[key];
    }

    keys() {
        return Object.keys(this.map);
    }


    values() {
        return Object.values(this.map);
    }


    size() {
        return Object.keys(this.map).length;
    }


    clear() {
        this.map = {};
    }
}

let myMap = new CustomMap();
myMap.set("Fruit1", "apple");
myMap.set("Fruit2", "baanana");

console.log(myMap.get("Fruit1"));
console.log(myMap.has("Fruit2")); 

myMap.delete("key1");
console.log(myMap.size()); 

console.log(myMap.keys()); 
console.log(myMap.values()); 

myMap.clear();
console.log(myMap.size());
