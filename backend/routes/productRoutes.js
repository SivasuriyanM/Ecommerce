const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const User = require("../models/User");

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new product
router.post("/", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    features: req.body.features,
    specifications: req.body.specifications,
    testimonials: req.body.testimonials,
    price: req.body.price,
    image: req.body.image,
  });
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
