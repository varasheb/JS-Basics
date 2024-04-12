//! Promises
const fs = require('fs')

const readFilePromise = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        })
    })
}

readFilePromise('Task/data.txt')
    .then(data => {
        console.log(data);
        return data; 
    })
    .then(data => fs.writeFile('Task/write.txt', data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File written successfully');
    }))
    .catch(err => console.error(err));
