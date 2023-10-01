const express = require("express");
const router = express.Router();
const middleware = require("./middleware");

router.use(middleware);

router.get("/",(req,res)=>{
    res.render("index",{
        title:"index"
    });
   
})
router.get("/download",(req,res)=>{
    
  
})
router.get("/about",(req,res)=>{
    res.render("home",{
        title:"home"
    });
   
})

module.exports = router;