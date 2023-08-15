// The node:path module provides utilities for working with file and directory paths. It can be accessed using:

const path = require('path')

const path1 = 'myDir'
const path2 = 'file.text'

const fullPath = path.join(__dirname,path1,path2)
console.log("Joined path: " + fullPath);


// Getting the filwe extension

const fileName  = 'example.html'

const extension = path.extname(fileName)
console.log(`File Extension: ${extension}`);

const filePath = `D:\Program Files\ReactJS\Revision.txt`
const basename = path.basename(filePath)
console.log(`Basename: ${basename}`);

