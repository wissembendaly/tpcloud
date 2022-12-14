const express = require("express");
const mongoose = require("mongoose");
const { Order,add } = require("./database/user.js")

const app = express();
app.use(express.json());

// app.get("/api/order/getAllOrders", async (req, res) => {
//     const allOrders = await Order.find();
//     return res.status(200).json(allOrders);
//   });

app.use('/crewmates',require('./routes/api/crewmates'))
//"mongodb+srv://tpurbanisation:tpurbanisation@cluster0.drplab0.mongodb.net/?retryWrites=true&w=majority"
const start = async () => {
  try {
    await mongoose.connect(
      "mongodb://tpcloud:Rdg27GQ13FC3SHJiucl2cWTPEy4PPxoBWZNuofpwEZ8cuTSEeMO1bQNb5Z0NlS2uLn1dXKneBh8xACDbVFj8xQ%3D%3D@tpcloud.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@tpcloud@"
    );
    app.listen(5000, () => console.log("Server started on port 5000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();



