


const express = require("express");
const classSchema = require("../models/class_period");
const TeacherSchema = require("../models/teacher");
const SubjectSchema = require("../models/subject");
const UserSchema = require("../models/user");

exports.createClass = async (req, res) => {
  try {
    const { subject_name, first_name } = req.body;

    const subject = await SubjectSchema.findOne({ subject_name });
    if (!subject) {
      return res.status(404).json({ error: "Subject not found" });
    }

    const user = await UserSchema.findOne({ first_name });
    if (!user) {
      return res.status(404).json({ error: "Teacher (user) not found" });
    }

    const teacher = await TeacherSchema.findOne({ user_id: user._id });
    if (!teacher) {
      return res.status(404).json({ error: "Teacher record not found" });
    }

    await classSchema.create({
      ...req.body,
      subject_id: subject._id,
      teacher_id: teacher._id,
    });

    res.status(200).json({ msg: "Class created successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

