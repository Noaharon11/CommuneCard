const mongoose = require("mongoose");

// Function to connect to the MongoDB database
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/CommuneCard");
    console.log("MongoDB connected to CommuneCard...");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
