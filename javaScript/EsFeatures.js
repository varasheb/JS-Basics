// ES6-1
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    toString() {
        console.log(`name : ${this.name} , age : ${this.age}`);
    }
}

let arjun = new Person('Arjun',21);
arjun.toString();//name : Arjun , age : 21
console.log(arjun.hasOwnProperty('name'));//true
console.log(arjun.hasOwnProperty('toString'));//false
console.log(arjun.__proto__.hasOwnProperty('toString'));//true

class Student extends Person {
    constructor(name, age, id){
        super(name, age);
        this.id = id;
    }
    action() {
        console.log(`Cutting Apple`);
    }
    toString() {
        console.log(`name : ${this.name} , age : ${this.age} , id : ${this.id}`);
    }
}

let karan = new Student('Arjun',21,1);
karan.action();//Cutting Apple
karan.toString();//name : Arjun , age : 21 , id : 1
console.log(karan instanceof Student);//true
console.log(karan instanceof Person);//true
console.log(arjun instanceof Student);//false
console.log(arjun instanceof Person);//true

//ES6-2
function mul(a=2,b=6){
    console.log(a*b);
}
mul(5,8);//40
mul();//12

//ES6-3
const firstName = 'Karan';
const secondName = 'Arjun';
// not use template literal
const nameWIthOutLiteralString = 'Hello, My name is ' + firstName + ', ' + secondName;
// use template literal
const nameWithLiteralString = `Hello, My name is ${firstName}, ${secondName}`;
console.log(nameWIthOutLiteralString);//Hello, My name is Karan, Arjun
console.log(nameWithLiteralString);//Hello, My name is Karan, Arjun

//ES6-4
const arr = [1, 2, 3, 4, 5];
const [one, two, three,, five] = arr;
console.log(one); // 1
console.log(two); // 2
console.log(three); // 3
console.log(five);//5

// To skip certain values
const [first,,,,last] = arr;
console.log(first); // 1
console.log(last); // 5

// Objects can also be destructurized and assigned
const student = { 
    name: 'King', 
    age: 38,
    city: 'Kingdom'
};
const {name, age, city} = student;
console.log(name); // "King"
console.log(age); // "38"
console.log(city); // "Kingdom"

//ES6-5
let sub = [3, 4, 5];
let main = [1, 2, sub, 6];
console.log(main);//[ 1, 2, [ 3, 4, 5 ], 6 ]
main = [1, 2, ...sub, 6];//spread operation
console.log(main);//[ 1, 2, 3, 4, 5, 6 ]

//ES6-6
const animal = 'Cat', length = 18, type = 'Domestic';

// Before ES6, we must write like this
const customer = {
    animal: animal,
    length: length,
    type: type
} 
console.log(customer);// { animal: 'Cat', length: 18, type: 'Domestic' }

// After ES6, we can do it
const newCustomer = {
    animal,
    length,
    type
} 
console.log(newCustomer);// { animal: 'Cat', length: 18, type: 'Domestic' }

//ES7-1
const num = [1,2,3,4,5,6,7,8,9];
console.log(num.includes(5));//true
console.log(num.includes(51));//false

//ES7-2
//Before
console.log(Math.pow(5,3));//125
//After
console.log(5**3);//125

//ES8-1
console.log(Object.values(newCustomer));//[ 'Cat', 18, 'Domestic' ]
console.log(Object.keys((newCustomer)));//[ 'animal', 'length', 'type' ]
console.log(Object.entries((newCustomer)));//[ [ 'animal', 'Cat' ], [ 'length', 18 ], [ 'type', 'Domestic' ] ]

//ES8-2
let str = '123';
console.log(str.padStart(5,'36'));//36123
console.log(str.padStart(5,'365'));//36123
console.log(str.padStart(8,'36'));//36363123

//ES9-1
let solution = new Promise((resolve,reject)=>{
    if(!resolve){
        resolve("Resolved");
    }else{
        reject("Rejected");
    }
});
solution.then((result)=>{
    console.log(result);
}).catch((result)=>{
    console.log(result);
}).finally(()=>{
    console.log('finally executed');
})

//ES9-2
//regexp

//ES10-1
let flat1 = [1,2,3,[4,5,6]];
console.log(flat1.flat());//returns new array
let flat2 = [1,2,3,[4,5,[6]]];
console.log(flat1.flat().flat());//[ 1, 2, 3, 4, 5, 6 ]

//ES10-2
let array = ["aj", "", "hjklbn"];
let map = array.map(s => s.split(""))
console.log(map);

let flatmap = array.flatMap(s => s.split(""));
console.log('flatmap',flatmap);