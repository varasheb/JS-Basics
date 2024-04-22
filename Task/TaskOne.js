// Asynchronous Task

// read file using callback function i hava data.txt and wite.txt 

// read file using callback function
const fs = require('fs');   
let value;
fs.readFile('Task/data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    value= data
    // console.log(data);
})


// write file using callback function
fs.writeFile('Task/write.txt'," hello", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File written successfully');
})

// feath data and store in file

function fetchData(callback) {
    fs.readFile('Task/data.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        callback(data)
    })
}

function processData(data) {
    fs.writeFile('Task/write.txt', data, (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('File written successfully');
})
}

fetchData(processData)



