const mongoose = require("mongoose");


const Userschema = new mongoose.Schema({
      username: {
        type: String,
        required: true,
      },
      firstname: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        required: true,
      },
      roles: {
        type: [String],
        required: false,
      },
      address: {
        type: String,
        required: false,
      },  
    });

  const User = mongoose.model("Users", Userschema);


  const addNewUser = async (username,firstname,lastname,roles=[],address) => {
   
    const newUser = await User.create({
      username: username,
      firstname: firstname,
      lastname: lastname,
      roles: roles,
      address: address,
    });
    newUser.save();
  
  };


  module.exports = { User,addNewUser } ; 

