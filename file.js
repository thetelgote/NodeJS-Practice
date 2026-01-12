const { error } = require("console");
const fs = require("fs");
const os = require("os");


// const result = fs.readFileSync("./contact.txt","utf-8")

// console.log(result);

console.log(os.cpus().length);


// fs.appendFileSync("./contact.txt",`hello \n`);


// fs.cpSync("./contact.txt","./copy.txt");


// console.log(fs.statSync("./contact.txt"));


// fs.readFile("./contact.txt","utf-8",(err,result)=>{

//  if(err)
//     {
//         console.log("error is occur")
//     }   

//     else{
//         console.log(result);
//     }



// })