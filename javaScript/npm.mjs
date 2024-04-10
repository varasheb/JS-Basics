import * as readline  from 'readline';
//import { cat } from "./cat.mjs";

//! npm

// var calci=require("./calci")

// console.log(calci.add(4,5))
// console.log(calci.sub(4,5))
// console.log(calci.mul(4,5))
// console.log(calci.div(4,5))  


//! Read a File
// const fs = require('fs');
// const { send } = require("./calculator.mjs")
// fs.readFile('javaScript/calci.js', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// })

//! write a file and remove the content
// const fs2 = require('fs');

// fs2.writeFile('javaScript/calci.js', 'console.log("Hello World")', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('File written successfully');
// })
//! append file
// const fs=require('fs')
// fs.appendFile('javaScript/calci.js', 'console.log("Hello World")', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('File written successfully');
// })
//! delete file
// const fs=require('fs')
// fs.unlink('javaScript/calci.js', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('File deleted successfully');
// })



//! input method in Es module
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('What do you think of Node.js? ', (answer) => {
//     // TODO: Log the answer in a database
//     console.log(`Thank you for your valuable feedback: ${answer}`);
//     rl.close();
// });

function as(){
    console.log(this)
}
as()

let a=()=>{
    console.log(this)
}
a()