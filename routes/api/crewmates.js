const mongoose = require("mongoose");
const express=require('express');
const router=express.Router();
const { User, addNewUser } = require("../../database/user")


  //gets members
  router.get('/', async (req,res)=>{
    const allcrewmates = await User.find();
    console.log(allcrewmates)
    res.status(200).json(allcrewmates);
})


router.post('/add',async (req,res)=>{
    console.log(req)
    var username= req.body.username;
    var firstname= req.body.firstname;
    var lastname= req.body.lastname;
    var roles= req.body.roles;
    var address= req.body.address;

    addNewUser(username,firstname,lastname,roles,address);
    res.status(200).json({msg:"crewmate added succussfully"});
 
  });





module.exports=router;