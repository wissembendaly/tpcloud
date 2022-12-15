const mongoose = require("mongoose");
const express=require('express');
const router=express.Router();
const { User, addNewUser, deleteUser ,updateUser } = require("../../database/user")


  //gets members
  router.get('/all', async (req,res)=>{
    const allcrewmates = await User.find();
    console.log(allcrewmates)
    res.status(200).json(allcrewmates);
})

  //gets members
  router.post('/addimage', async (req,res)=>{
    var username= req.body.username;
    var imageurl= req.body.image;
    const user = await User.updateOne(
      {username:username},
      { profile_image_url: imageurl,});
      console.log(user);
      res.status(200).json("image added succussfully");
})

  //gets members
  router.get('/byusername', async (req,res)=>{
    var username= req.body.username;
    const userbyUsername = await User.find({username:username});
    console.log(userbyUsername)
    res.status(200).json(userbyUsername);
})

  //gets members
  router.get('/byaddress', async (req,res)=>{
    var address= req.body.address;
    const userbyAdress = await User.find({address:address});
    console.log(userbyAdress)
    res.status(200).json(userbyAdress);
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

  router.put('/update',async (req,res)=>{
    console.log(req)
    var username= req.body.username;
    var firstname= req.body.firstname;
    var lastname= req.body.lastname;
    var roles= req.body.roles;
    var address= req.body.address;

    updateUser(username,firstname,lastname,roles,address);
    res.status(200).json({msg:"crewmate updated succussfully"});
 
  });


  router.delete('/delete',async (req,res)=>{
    console.log(req)
    var username= req.body.username;
    deleteUser(username,firstname,lastname,roles,address);
    res.status(200).json({msg:"crewmate deleted succussfully"});
 
  });




module.exports=router;