const express = require("express");
const Controller = require("../controllers/officestaffController.js");
const router = express.Router();

router.get("/staff", Controller.getStaff);
router.post("/staff", Controller.createStaff);

module.exports = router;
