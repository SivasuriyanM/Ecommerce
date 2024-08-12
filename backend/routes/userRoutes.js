const express = require("express");
const router = express.Router();
const User = require("../models/User");

//Get All Users
router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch {
    res.status(500).json({ message: err.message });
  }
});

//Add a new User
router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
