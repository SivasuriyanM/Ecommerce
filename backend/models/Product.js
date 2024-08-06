const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  features: [String],
  specifications: String,
  testimonials: [String],
  price: Number,
  image: String,
});

module.exports = mongoose.model("Product", ProductSchema);
