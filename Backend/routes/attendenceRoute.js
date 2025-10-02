const express = require("express")
const route = express.Router();
const AttendenceController = require('../controllers/AttendenceController.js');
route.post("/attendence",AttendenceController.markAttendence);
route.get("/attendence",AttendenceController.getAttendance)
module.exports = route