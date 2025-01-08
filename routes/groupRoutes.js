const express = require("express");
const router = express.Router();
const groupController = require("../controllers/groupController");

// Route to create a new group
router.post("/", groupController.createGroup);

// Route to get all groups
router.get("/", groupController.getAllGroups);

module.exports = router;
