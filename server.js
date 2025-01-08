const express = require("express");
const connectDB = require("./db");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const groupRoutes = require("./routes/groupRoutes");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/users", userRoutes);
app.use("/orders", orderRoutes);
app.use("/groups", groupRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
