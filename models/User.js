const mongoose = require("mongoose");

// Schema for users
const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["consumer", "supplier"], required: true }, // Role of the user
    address: { type: String }, // Address for consumers
    serviceRange: { type: Number }, // Service range for suppliers
    createdAt: { type: Date, default: Date.now },
  },
  { collection: "users" }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
