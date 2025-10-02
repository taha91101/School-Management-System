const express = require("express");
const Student = require("../models/student.js");

const user = require("../models/user.js");
const Guardian = require("../models/guardian.js");
const StudentYear = require("../models/student_year_level.js");
const schoolyearlevel = require("../models/schoolyear.js");
const yearlevel = require("../models/yearlevel.js");
const student_year_level = require("../models/student_year_level.js");
const StudentGuardian = require("../models/student_guardian.js");

exports.getAllStudent = async (req, res) => {
  try {
    const allStudents = await Student.find();
    const allUser = await user.find();
    const allGuardian = await Guardian.find();
    const studentyear = await StudentYear.find();
    const yearlevels = await yearlevel.find();
    const syl = await student_year_level.find();
    const enhancedStudents = allStudents.map((student) => {
      const id = student._id;
      const father_name = student.father_name;
      const mother_name = student.mother_name;
      const date_of_birth = student.date_of_birth;
      const userData = allUser.filter((u) => u.id == student.user_id);
      const UserId = userData.map((d) => d.id);
      const guardianData = allGuardian.filter((g) => g.user_id == UserId[0]);

      return {
        id,
        father_name,
        mother_name,
        date_of_birth,
        userData,
        guardianData,
      };
    });

    const schoolYears = await schoolyearlevel.find({
      _id: { $in: studentyear.map((sy) => sy.school_year_id) },
    });

    // console.log(schoolYears);

    const studentYearLevelIds = syl.map((syl) => syl._id);
    const classes = await yearlevel.find({
      _id: { $in: studentyear.map((c) => c.year_level_id) },
    });
    console.log(studentYearLevelIds, classes);

    const studentGuardians = await StudentGuardian.find({
      student_id: { $in: allStudents.map((s) => s._id) },
    });
    // console.log(studentGuardians);

    res
      .status(200)
      .json({ msg: "success", data: enhancedStudents, studentYearLevelIds });
  } catch (error) {
    res.status(404).json({ msg: "Data not Found", error: error.message });
  }
};

exports.getStudentClassWise = async (req, res) => {
  const { year_level_id } = req.body;
  const syl = await student_year_level.find();

  const sameLevelStudent = syl.filter(
    (stu) => stu.year_level_id == year_level_id
  );
  console.log(sameLevelStudent);

  const findInStudentTable = await Student.find({
    _id: { $in: sameLevelStudent.map((s) => s.student_id) },
  }); // take father name and mother name
  console.log(findInStudentTable);

  const findStudentInUser = await user.find({
    _id: { $in: findInStudentTable.map((s) => s.user_id) },
  }); //take first and last name
  return res
    .status(200)
    .json({ findStudentInUser, findInStudentTable, sameLevelStudent });
};
