const User = require("../models/User");

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { role } = req.body;

    // Validate the role
    if (!["consumer", "supplier"].includes(role)) {
      return res
        .status(400)
        .json({ error: "Invalid role. Must be consumer or supplier." });
    }

    // Create a new user
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get users by role (consumer or supplier)
exports.getUsersByRole = async (req, res) => {
  try {
    const { role } = req.params;

    // Validate the role
    if (!["consumer", "supplier"].includes(role)) {
      return res
        .status(400)
        .json({ error: "Invalid role. Must be consumer or supplier." });
    }

    // Find users by role
    const users = await User.find({ role });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
