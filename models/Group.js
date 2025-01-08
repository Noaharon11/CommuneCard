const mongoose = require("mongoose");

// Schema for purchase groups
const groupSchema = new mongoose.Schema({
  supplierId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }, // Reference to the supplier
  region: { type: String, required: true }, // Region of the group
  status: { type: String, enum: ["active", "closed"], default: "active" }, // Group status
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }], // List of orders in the group
  createdAt: { type: Date, default: Date.now }, // Creation timestamp
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
