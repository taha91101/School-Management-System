const express = require("express");
const route = express.Router();
const subjectController = require("../controllers/subjectController");
route.post("/addsubject", subjectController.addSubject);
route.get("/subject", subjectController.getAllSubjects);
module.exports = route;
