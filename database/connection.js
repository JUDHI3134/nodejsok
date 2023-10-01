const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/nodejs").then(()=>{
    console.log("connection successful");
}).catch((e)=>{
    console.log(e);
})


const schema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    confirmpassword:{
        type:String,
        require:true
    }
})


const user = mongoose.model("user",schema);

module.exports = user;