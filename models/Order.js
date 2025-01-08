const mongoose = require("mongoose");

// Schema for orders
const orderSchema = new mongoose.Schema({
  consumerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }, // Reference to the consumer
  supplierId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }, // Reference to the supplier
  status: {
    type: String,
    enum: ["pending", "in_progress", "delivered"],
    default: "pending",
  }, // Order status
  deliveryAddress: { type: String, required: true }, // Delivery address
  deliveryTime: { type: Date, required: true }, // Delivery time
  createdAt: { type: Date, default: Date.now }, // Creation timestamp
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
