const express = require("express")
const multer = require("multer")
const storage = multer.memoryStorage()
const upload = multer({storage})
const route = express.Router()
const Controller = require("../controllers/directorController.js")

route.post("/director",upload.single('file'),Controller.CreateDirector)

module.exports = route