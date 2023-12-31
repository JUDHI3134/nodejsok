const express = require("express");
const app = express();
const user = require("./connection");


app.use(express.json());

app.post("/",async(req,res)=>{
    try {
        const senddata = new user(req.body);
        const savedata = await senddata.save();
        res.send(savedata);
    } catch (error) {
       res.status(404).send(error); 
    }
})

//get data
app.get("/user",async(req,res)=>{
    try {
        const getdata = await user.find({});
        res.send(getdata);
    } catch (error) {
        res.status(404).send(error)
    }
})

//get a particular data from the daatabse (use id)
app.get("/user/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        const getiddata = await user.findById({_id:id});
        res.send(getiddata);    
    } catch (error) {
       res.status(404).send(error); 
    }
})

//update data in the database
app.patch("/update/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        const updatedata = await user.findByIdAndUpdate({_id:id},req.body,{new:true});
        res.send(updatedata);
    } catch (error) {
        res.status(500).send(error);
    }
})

//delete data from the database
app.delete("/delete/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        const deletedata = await user.findByIdAndDelete({_id:id});
        res.send(deletedata);
    } catch (error) {
        res.status(500).send(error)
    }
})

//login

app.post("/login",async(req,res)=>{
    try {
        const useremail = req.body.email;
        const getemail = await user.findOne({email:useremail});
        res.send(getemail);
    } catch (error) {
        res.status(400).send(error)
    }
})



app.listen(3000,()=>{
    console.log("server successfully created");
})