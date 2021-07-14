//
//database connection page
//
const mongoose = require("mongoose");

//for process env
const dotenv = require("dotenv").config();

const db = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
    });
    console.log("Database Connected");
  } catch (err) {
    console.log(err.message);
    return;
  }
};

module.exports = connectDB;