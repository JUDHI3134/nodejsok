const http = require("http");
const fs = require("fs");
const server = http.createServer((req,res)=>{

    const jsondata = fs.readFileSync("api.json","utf-8");
    const objedata = JSON.parse(jsondata);
    if(req.url == "/"){
        res.end("This is my first node js server");
    }
    else if(req.url == "/download"){
        res.end("hii this is my node js download page");
    }
    else if(req.url == "/about"){
        // res.end(fs.readFileSync("api.json","utf-8"));
        res.end(objedata[0].name)
    }
    else{
        res.end("404 ! page could not be found");
    }
})

server.listen(3000,()=>{
    console.log("server listen at port number at 3000");
})