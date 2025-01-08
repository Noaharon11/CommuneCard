const Group = require("../models/Group");

// Create a new group
exports.createGroup = async (req, res) => {
  try {
    const group = new Group(req.body);
    await group.save();
    res.status(201).json(group);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all groups
exports.getAllGroups = async (req, res) => {
  try {
    const groups = await Group.find().populate("supplierId orders"); // Populate references
    res.status(200).json(groups);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
