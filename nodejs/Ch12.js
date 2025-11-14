/*
CRUD with file system

Q1. Create, Read, Update and Delete Operation with FS.
Q2. CRUD Operation with terminal inputs.
*/

const fs = require('fs');

// Create File
fs.writeFileSync('red.txt', "This is red color.");

// Read File 
const data = fs.readFileSync('red.txt', "utf-8");
console.log(data);

//Update File
fs.appendFileSync('red.txt', "Red is a primary color.");

//Delete File
fs.unlinkSync('red.txt');