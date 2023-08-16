const { log, error } = require('console');
const fs = require('fs');

// Writing yo file

const contendToWrite = 'Hello, Node.Js !!!'

fs.writeFile('example.txt', contendToWrite,(err)=>{
    if(err){
        console.log('Error Wrint To File' + err);
    } else{
        console.log("FIle Written Successfully");
    }
})

// Reading the file
fs.readFile('module.txt','utf8',(err,data)=>{
    if(err){
        console.log("Error reading File", err);
    }else{
        console.log("File Content",data);
    }
})

// File Information
fs.stat("module.txs",(err,stat)=>{
    if(err){
        console.log("Error in stat", err)
    }else{
        console.log("File Size",stat.size)
        console.log("Is the file?",stat.isFile())
        console.log("Is the Directory",stat.isDirectory())
    }
})

//Appending file information
const contendToAppend = "Welcome to MERN or MEAN stack development" 
fs.appendFile("module.txt",contendToAppend,(err)=>{
    if(err){
        console.error("Error in Appending file",err)
    }else{
        console.log("Contend appendend successfully..");
    }
})

// Delete a File
fs.unlink("example.ts",(err)=>{
    if(err){
        console.error("Error in deleting file", err);
    }else{
        console.log("File Deleted Successfully");
    }
})

// Create Directory
fs.mkdir("New Directort",(err)=>{
    if (err) {
        console.error("Error in creating Directory",err)
    }else{
        console.log("Directory created successfully");
    }
})