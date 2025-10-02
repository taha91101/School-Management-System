const express = require("express");
const Attendence = require("../models/student_Attendence");
const Student = require("../models/student");
const syl = require("../models/schoolyear");
const User = require("../models/user");
const Teacher = require("../models/teacher");
const yearlevel = require("../models/yearlevel");

exports.markAttendence = async (req, res) => {
  try {
    const {
      student_id,
      Status,
      school_year_id,
      marked_at,
      teacher_id,
      year_level_id,
    } = req.body;

    const StudentAttendenceData = student_id.map((studentID) => ({
      student_id: studentID,
      Status:Status[studentID],
      school_year_id,
      marked_at,
      teacher_id,
      year_level_id,
    }));
    const studentAttendence = await Attendence.insertMany(
      StudentAttendenceData
    );

    res.status(200).json({ msg: "Attendence Marked", studentAttendence });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.getAttendance = async (req, res) => {
  try {
    const { student_ids } = req.body;
    // console.log(student_ids);

    const allStudentAttendance = await Attendence.find({
      student_id: { $in: student_ids },
    });
    // console.log(allStudentAttendance);
    return res
      .status(200)
      .json({ message: "get attendance successfully", allStudentAttendance });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
