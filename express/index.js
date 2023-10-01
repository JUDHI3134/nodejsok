const express = require("express");
const path = require("path");
const app = express();
const router = require("./router.js");
const port = 3000;

app.set("view engine","ejs");
app.use(router);

app.listen(port,()=>{
    console.log(`server listen port numbre ${port}`);
})

// const pathdir = path.join(__dirname,"public");
// app.use(express.static(pathdir));


// app.get("/",(req,res)=>{
//     // res.send("Hii this is my first express server");
//     // res.send("index");
//     res.sendFile(`${pathdir}/index.html`)
// })
// app.get("/download",(req,res)=>{
//     // res.send("Hii this is my first express download page");
//     res.download(`${pathdir}/index.html`)
// })
// app.get("/about",(req,res)=>{
//     // res.send("Hii this is my first express about page");
//     res.sendFile(`${pathdir}/home.html`)
   
// })


// app.listen(3000,()=>{
//     console.log(`server listen port numbre ${port}`);
// })


//ejs

// app.set("view engine","ejs");

// app.get("/",(req,res)=>{
//     res.render("index",{
//         title:"index"
//     });
   
// })
// app.get("/download",(req,res)=>{
    
  
// })
// app.get("/about",(req,res)=>{
//     res.render("home",{
//         title:"home"
//     });
   
// })


// app.listen(3000,()=>{
//     console.log(`server listen port numbre ${port}`);
// })


//router




// app.listen(3000,()=>{
//     console.log(`server listen port numbre ${port}`);
// })