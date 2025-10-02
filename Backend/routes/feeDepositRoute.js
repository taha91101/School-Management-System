const express = require("express")
const route = express.Router()
const feesController = require("../controllers/feesController")
route.post('/feesdeposit/:id',feesController.feeSubmission)
route.get("/feeRecord/:id",feesController.feeDetails)
module.exports = route;