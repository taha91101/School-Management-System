const express = require("express")
const route = express.Router();
const classperiodController = require('../controllers/classController.js');
route.post("/setPeriod",classperiodController.createClass);
module.exports = route