//! Async and await
const fs = require('fs').promises;

async function readFile() {
    try {
        const data = await fs.readFile('Task/data.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

readFile()

// write to a file
async function writeFile() {
    try {
        await fs.writeFile('Task/write.txt', 'Hello World this is async and await', 'utf8');
    } catch (err) {
        console.error(err);
    }
}

writeFile()

// append to a file
async function appendFile() {
    try {
        await fs.appendFile('Task/write.txt', ' \nMy name is varshab kanthi', 'utf8');
    } catch (err) {
        console.error(err);
    }
}

appendFile()