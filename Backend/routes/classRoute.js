const express = require("express");
const route = express.Router();
const Controller2 = require("../controllers/yearLevelController");
const controllers = require("../controllers/studentController");

route.get("/classes", Controller2.getClasses);
route.post("/classwiseStudent", controllers.getStudentClassWise);

module.exports = route;
