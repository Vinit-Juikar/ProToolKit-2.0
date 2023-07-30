const mongoose = require("mongoose");

const connectDB = async (url) => {
  console.log("Connected to DB");
  return await mongoose.connect(url);
};

module.exports = connectDB;
