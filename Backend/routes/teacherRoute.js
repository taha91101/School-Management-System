const express = require("express");
const Controller = require("../controllers/teacherContoller.js");
const router = express.Router();

router.get("/teacher", Controller.getAllTeacher);
router.post("/teacher", Controller.CreateTeacher);

module.exports = router;
