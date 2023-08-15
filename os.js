
const os = require('os') // import os module

console.log('Os Platform' + os.platform); 

console.log(`Os Type: ${os.type()}`);

console.log(`Os Realese: ${os.release}`);

console.log(`Total memory in bytes: ${os.totalmem()}`);

console.log(`Total memory in bytes: ${os.freemem()}`);

console.log(`CPU Architecture: ${os.arch()}`);

console.log(`CPU Architecture: ${os.homedir()}`);

console.log(`CPU Architecture: ${os.tmpdir()}`);