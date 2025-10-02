const express = require("express")
const route = express.Router()
const Controller = require("../controllers/AdmissionController.js")

route.post("/admission",Controller.AdmissoinForm)

module.exports = route