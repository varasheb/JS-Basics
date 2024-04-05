//! Arrays
// const arr=[10,"raj",1n,null,undefined,true,function (){},[],{}]
// console.log(arr);
// console.log(typeof arr);

// let a=10;
// console.log(Array.isArray(a));//false
// console.log(Array.isArray(arr));//true

//! push()
// let arr=[10,20,30,40,50]
// arr.push("web","html");
// console.log(arr);

//!pop()
// arr.pop();
// console.log(arr);

//! unshift() add element to the head
// let arr=[10,20,30,40,50]
// arr.unshift(10,20);
// console.log(arr);

//!shift()  remove the element from the head
// let arr=[10,20,30,40,50]
// arr.shift();
// arr.shift();
// console.log(arr);

//! slice(start index,end index)
// let arr=[10,20,30,40,50]
// console.log(arr.slice(2,4))
// console.log(arr.slice(2))
// console.log(arr.slice(-2))
// console.log(arr.slice(-3,-1))

//! splice(start index, number of element to be removed, element to be added)
//let arr=[10,20,30,40,50]
// arr.splice(2,2,"a","b","c")
// //? [10,20,"a","b","c",50]
// arr.splice(2,2);
// //? [10,20,50]
// arr.splice(2);
// //? [10,20]
//& negative value
//& arr.splice(-2,-2) // ==>  arr.splice(-2,0)
// //? [10,20,30,40,50]
// arr.splice(-2,-2,"A","B")
// arr.splice(-2,0,"A","B")
// //? [10,20,30,"A","B",40,50]
//console.log(arr);

//! join()
// let arr=[10,20,30,40,50];
// arr.join();
// console.log(arr.join());
//? 10,20,30,40,50
// console.log(arr.join(""));
//? 1020304050
// console.log(arr.join(" "));
//? 10 20 30 40 50
// console.log(arr.join("@"));
//? 10@20@30@40@50

//! fill()
// let arr=[10,20,30,40,50];
// arr.fill()
//? [undefine,undefine,undefine,undefine,undefine]

// arr.fill("10")
//? ['10','10','10','10','10']
// arr.fill(30)
//? [30,30,30,30,30]
// console.log(arr);

//! concat()
// console.log("hii");
// let arr=[10,20,30];
// let brr=["a","b","c"];
// let crr=[true,false];
//console.log(arr.concat(brr,crr));//[10, 20, 30, 'a', 'b', 'c', true, false]

//! includes()
// let arr=[10,20,30,20];
// console.log(arr.includes("30"));//false
// console.log(arr.includes(30));//true

//! indexOf()
// console.log(arr.indexOf(20));//1
// console.log(arr.indexOf(50));//-1

//! lastIndexOf()
// console.log(arr.lastIndexOf(20));//3
// console.log(arr.lastIndexOf(50));//-1

// let arr=[10,20,30,40,50,];
// arr.map((ele,index,array)=>{
//     console.log(ele);
// })

//! higher order methods
// map()
// filter()
// reduce()
// sort()
// some()
// every()


//! Array Higher order Methods
//! map()

//& EXAMPLE 1
// let arr=[10,20,30,40,50,];
// arr.map((index,ele)=>{
//     console.log(index,ele);
// })
// //& EXAMPLE 2
// arr.map((ele,index,array)=>{
//     console.log(ele+"@");
// })

// // square of all element in map
// arr.map(ele=>{
// sq=ele*ele;
// console.log(sq)
// })

//?  to  doubble the element
// let array=[10,20,30,40,50]
// let arr=array.map(ele=>ele*2)
// console.log(arr)


//! filter()

//& EXAMPLE 1
// let arr=[10,20,30,40,50,];
// arr.filter((ele,index,array)=>{
//     console.log(ele,index,array);
// })

// console.log(arr.filter((ele,index,array)=>{
//     return ele>30;
// }));

//! reduce()
//& EXAMPLE 1
// let arr=[11,12,13,14,15];
// let result=arr.reduce((accu,value)=>{
//     return accu+value;
// })
// console.log(result);

//! sort()
//& EXAMPLE 1
let arr=["Raj","anand","manideep","bharath"];
//console.log(arr.sort());
//& EXAMPLE 2
let brr=[101,0,45,9,67];
console.log(brr.sort());
//& EXAMPLE 3
//? ASENDING ORDER
// console.log(brr.sort((a,b)=>{
//     return a-b;
// }));
//? DESENDING ORDER
// console.log(brr.sort((a,b)=>{
//     return b-a;
// }));

//! some()
// let brr=[101,0,45,9,67]
// console.log(brr.some((ele)=>{
//     return ele>100;
// }));
//! every()
// console.log(brr.every((ele)=>{
//     return ele>100;
// }));
