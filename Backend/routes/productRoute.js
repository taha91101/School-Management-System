const express = require("express")
const controller = require("../controllers/ProductController")
const route = express.Router();

route.post("/product",controller.AddProduct)

module.exports = route