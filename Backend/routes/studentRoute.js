const express = require("express");
const Controller = require("../controllers/studentController.js");
const router = express.Router();

router.get("/student", Controller.getAllStudent);
router.post("/classwiseStudent", Controller.getStudentClassWise);

module.exports = router;
