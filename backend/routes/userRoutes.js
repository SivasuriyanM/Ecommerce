const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { ObjectId } = require("mongodb");

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
// Add Product to Cart
router.put("/cart", async (req, res) => {
  const { id, fieldToUpdate, newValue } = req.body;
  try {
    const update = { [fieldToUpdate]: newValue };
    const result = await User.findByIdAndUpdate(
      id,
      { $push: update },
      { new: true }
    );

    if (result) {
      res.json({ success: true, document: result });
    } else {
      res.status(404).json({ success: false, message: "Document not found" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to update the document" });
  }
});
router.put("/removecart", async (req, res) => {
  const { id, fieldToUpdate, newValue } = req.body;
  try {
    const update = { [fieldToUpdate]: { ["_id"]: newValue } };
    const result = await User.findByIdAndUpdate(
      id,
      { $pull: update },
      { new: true }
    );

    if (result) {
      res.json({ success: true, document: result });
    } else {
      res.status(404).json({ success: false, message: "Document not found" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to update the document" });
  }
});
module.exports = router;
