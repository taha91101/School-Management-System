const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    require: true,
    type: String,
    trim: true,
  },
  price: {
    require: true,
    type: Number,
  },
})

module.exports = mongoose.model("Product",ProductSchema)