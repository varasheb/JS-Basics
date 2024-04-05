console.log("hii");

//let str="JavaScript";
//! length is a property to check the length of the string
// console.log(str.length);
// ! toUpperCase()
// console.log(str.toUpperCase());
// ! toLowerCase()
// console.log(str.toLowerCase());
// ! slice(start index,end index):
// ? start index will be included, end index will be excluded and negative values can also be specified.
// console.log(str.slice(1,4));
// console.log(str.slice(1));
// console.log(str.slice(-4));//ript
// console.log(str.slice(-8,-5));//vas

// ! substring(start index,end index):
// ? start index will be included, end index will be excluded and similar to slice but negative values will be considered as 0.
// console.log(str.substring(1,4));
// console.log(str.substring(1));
// console.log(str.substring(-4));//console.log(str.substring(0));
// console.log(str.substring(-4,3));

// a=1+"2";
// console.log(a);
// a="helo"+" "+" hi"
// console.log(a)
//! concat():
// ? merge two or more string
// let str1="JavaScript"
// let str2="is"
// let str3="easy-peasy"
// console.log(str1.concat(" ",str2," ",str3));

//! replace() and replaceAll()
// ? replace method replaces only first matched word.
// ? replaceAll(): replaceAll method replaces all the matched word.
// let st="My Student are good with good skill"
// console.log(st.replace("good","best"));
// console.log(st.replaceAll("good","best"));
//? /i is the regular expression called as insensitive
//? /g is the regular expression called as global match
// console.log(st.replace(/Good/i,"best"));
// console.log(st.replace(/good/g,"best")); 
//~ NOTE: for replaceAll() both insensitive and global match should be used.

//? padStart() and padEnd() methods are used to pad a string with another string until it reaches a specified length
// let str="Raj"
// console.log(str.padStart(4,"@"));
// console.log(str.padStart(5,"@"));
// console.log(str.padStart(6,"@#$"));

// console.log(str.padEnd(4,"@"));
// console.log(str.padEnd(5,"@"));
// console.log(str.padEnd(6,"@#$"));


// st="raj"
// console.log(st.padStart(8,"@"));
// console.log(st.padEnd(8,"@"));

//! split(): 
//? converts the string to an array based on the given value inside the method.
// let str="JavaScript is easy-peasy";
// console.log(str.split());
// console.log(str.split(""));
// console.log(str.split(" "));
// console.log(str.split("a"));

//! trim():
//? removes the space from the starting and ending of the string
//! trimStart():
//? removes the space from the starting of the string
//! trimEnd():
//? remove the space from the ending of the string.
// let str="JavaScript is easy-peasy";
// console.log(str.trim(" "));
// console.log(str.trimStart(" "));//not writenn
// console.log(str.trimEnd(" "));

//!include()
//? includes method checks whether the specified character or substring is preasent or not. Return the value in the form of boolean.
// let str="Web Technology"
// console.log(str.includes("z"));
// console.log(str.includes("o"));
// console.log(str.includes(" "));
// console.log(str.includes("  "));
// console.log(str.includes("Tech"));
// console.log(str.includes("tech"));

//! indexof()
//? indexOf returns the index values of the matching first encountered character in the string
//? if the character is not present then return -1.
// console.log(str.indexOf("W"));
// console.log(str.indexOf("w"));
// console.log(str.indexOf("z"));
// console.log(str.indexOf("o"));
//! lastIndexOf()
//? lastIndexOf returns the index value of the matching last encountered character in the string
//? if the character is not present then returns -1.
// console.log(str.lastIndexOf("o"));
// console.log(str.lastIndexOf("x"));