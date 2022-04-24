const express = require('express');
const mongoose=require('mongoose');
const Person=require('./config/person');
const connectDB = require("./config/connectDB");

const app = express()
app.use(express.json());
connectDB();


app.get("/personne",async(req,res)=>{
    try{
        await Person.find()
        .then((result)=>{
            res.send(result);
        });
    } catch(err){
        console.log(err);
    }
});



app.post("/add",async(req,res)=>{
    const {name,age,favoriteFoods}=req.body;
    try{
        const newPerson=new Person({
            name,
            age,
            favoriteFoods,
        });
        await newPerson.save();
        res.send('contact added');
    }
    catch(err){
        console.log(err);
    }
})

app.put("/edit/:_id",async(req,res)=>{
    const{_id} = req.params;
    try{
        const person = await Person.findOneAndUpdate({_id},{$set:req.body});
    res.json({msg:'person edited',person});
    }catch(err){
        console.log(err);
    }
});


app.delete('/delete/:id',async (req,res)=>{
    const{id} =req.params;
    try{
        const person = await Person.findOneAndDelete({_id:id});
        res.json({ msj:'persont deleted',person});
    }catch(error){
        console.log(error);
    }
});




app.listen(5000,()=>console.log('server is  running'))