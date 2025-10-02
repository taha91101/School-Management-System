require("dotenv").config();
const AdmissionSchema = require("../models/admission.js");
const Users = require("../models/user.js");
const Student = require("../models/student.js");
const Guardian = require("../models/guardian.js");
const RoleSchema = require("../models/role.js");
const SchoolYearSchema = require("../models/schoolyear.js");
const YearLevelSchema = require("../models/yearlevel.js");
const studentYear = require("../models/student_year_level.js");
const StudentGuardian = require("../models/student_guardian.js");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
exports.AdmissoinForm = async (req, res) => {
  try {
    const {
      admission_date,
      previous_school_name,
      tc_letter,
      father_name,
      mother_name,
      emergency_contact_no,
      address,
      first_name,
      middle_name,
      school_year_id,
      year_level_id,
      last_name,
      password,
      email,
      phone_no,
      gender,
      role,
      date_of_birth,
      annual_income,
      qualification,
      occupation,
    } = req.body;

    const existingUser = await Users.findOne({
      email,
    });
    if (existingUser)
      return res.status(400).json({
        message: "User already exists",
      });
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    const newId = new mongoose.Types.ObjectId();

    const roleDoc = await RoleSchema.findOne({
      name: {
        $in: role,
      },
    });
    console.log(roleDoc);

    const SchoolYear = await SchoolYearSchema.findOne({
      name: {
        $in: school_year_id,
      },
    });
    const Yearlevel = await YearLevelSchema.findOne({
      level_name: {
        $in: year_level_id,
      },
    });

    const NewUser = await Users.create({
      _id: newId,
      first_name,
      middle_name,
      last_name,
      password: passwordHash,
      email,
      phone_no,
      role: roleDoc._id,
      gender,
    });
    const NewStudent = await Student.create({
      father_name,
      mother_name,
      user_id: NewUser._id,
      date_of_birth,
    });
    const NewGauardain = await Guardian.create({
      user_id: NewUser._id,
      annual_income,
      qualification,
      occupation,
    });
    await AdmissionSchema.create({
      student_id: NewStudent._id,
      admission_date,
      previous_school_name,
      tc_letter,
      father_name,
      mother_name,
      guardian_id: NewGauardain._id,
      year_level_id: Yearlevel,
      school_year_id: SchoolYear,
      emergency_contact_no,
      address,
    });
    await studentYear.create({
      student_id: NewStudent._id,
      year_level_id: Yearlevel._id,
      school_year_id: SchoolYear._id,
    });
    const studentGuardian = await StudentGuardian.create({
      student_id: NewStudent.id,
      guardian_id: NewGauardain.id,
    });
    return res.status(201).json({
      message: `registered successfully`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
      message: "Registration failed",
    });
  }
};
