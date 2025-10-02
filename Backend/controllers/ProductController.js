const express = require("express");
const ProductSchema = require("../models/product");

exports.AddProduct = async (req, res) => {
  try {
    const { title, price } = req.body;
    await ProductSchema.create({
      title,
      price,
    });
    res.status(200).json({ msg: "Product added Successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
