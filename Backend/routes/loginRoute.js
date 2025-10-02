const express = require("express");
const Controller = require("../controllers/LoginController.js");
const router = express.Router();

router.post("/login", Controller.LoginDirector);

module.exports = router;
