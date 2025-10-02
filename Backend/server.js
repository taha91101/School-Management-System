require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(express.json());
const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URI;
const studentRoute = require("../Backend/routes/studentRoute.js");
const teacherRoute = require("../Backend/routes/teacherRoute.js");
// const roleRoute = require("../Backend/routes/roleRoute.js");
const AdmissionRoute = require("../Backend/routes/AdmissionRoute.js");
const DirectorRoute = require("../Backend/routes/directorRoute.js");
const LoginRoute = require("../Backend/routes/loginRoute.js");
const StaffRoute = require("../Backend/routes/staffRoute.js");
const classRoute = require("../Backend/routes/classRoute.js");
const classperiodroute = require("../Backend/routes/classPeriodRoute.js");
const SubjectRoute = require("../Backend/routes/subjectRoute.js");
const feeDepositRoute = require("../Backend/routes/feeDepositRoute.js");
const AttendenceRoute = require("../Backend/routes/attendenceRoute.js");
const Product = require("../Backend/routes/productRoute.js");
app.use(cors());

const MONGODB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
MONGODB();

app.use("/school", AdmissionRoute);
app.use("/school", LoginRoute);
app.use("/school", teacherRoute);
app.use("/school", StaffRoute);
app.use("/school", studentRoute);
app.use("/school", feeDepositRoute);
app.use("/school", DirectorRoute);
app.use("/school", classRoute);
app.use("/school", SubjectRoute);
app.use("/school", classperiodroute);
app.use("/school", AttendenceRoute);
app.use("/school", Product);

app.listen(PORT, () => {
  console.log("Listining to Port", PORT);
});
