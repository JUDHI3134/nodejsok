const fs = require("fs");


//Asyncronus file structer

// fs.writeFile("file.txt","hello Good evening judhistir",()=>{
//     console.log("data is successfull added");
// });

// //syncronus fs
// const a = fs.writeFileSync("file2.txt","data is added to file");
// console.log(a);
// console.log("hello World");

// const b = fs.readFileSync("file.txt","utf-8");
// console.log(b);

// fs.readFile("file2.txt","utf-8",(err,data)=>{
//     console.log(data);
// })


//append file

// fs.appendFile("file2.txt"," some new data is added to file ",(err)=>{
//     console.log(err);
// })


// fs.rename("file2.txt","judhi.txt",(err)=>{
//     console.log(err);
// })

fs.unlinkSync("judhi.txt");