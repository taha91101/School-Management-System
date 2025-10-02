const express = require("express");
const Teacher = require("../models/teacher.js");
const Users = require("../models/user.js");
const bcrypt = require("bcrypt");
const Role = require("../models/role.js");

exports.getAllTeacher = async (req, res) => {
  try {
        const allteacher = await Teacher.find();
    const allUser = await Users.find();
    const enhanchedteacher = allteacher.map((teacher) => {
      const id = teacher._id;
      const adhaar_no = teacher.adhaar_no;
      const pan_no = teacher.pan_no;
      const qualification = teacher.qualification;
      const userData = allUser.filter((u) => u.id == teacher.user_id);

      return {
        id,
        adhaar_no,
        pan_no,
        qualification,
        userData,
      };
    });
     res.status(200).json({ msg: "success", data: enhanchedteacher });
  } catch (error) {
    res.status(404).json({ msg: "Data not Found", error: error.message });
  }
};

exports.CreateTeacher = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const existingUser = await Users.findOne({
      email,
    });
    if (existingUser)
      return res.status(400).json({
        message: "User already exists",
      });
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    const roleDoc = await Role.findOne({
      name: {
        $in: role,
      },
    });
    const newUser = await Users.create({
      ...req.body,
      ...req.body,
      password: passwordHash,
      role: roleDoc._id,
      email,
    });
    const teacher = await Teacher.create({
      ...req.body,
      user_id: newUser._id,
    });
    res
      .status(200)
      .json({ msg: "Teacher added Successfully", teacher, newUser });
  } catch (error) {
    res
      .status(400)
      .json({ msg: "Error in adding Teacher", error: error.message });
  }
};
