const express = require("express");
const OfficeStaff = require("../models/officeStaff.js");
const Users = require("../models/user.js");
const bcrypt = require("bcrypt");
const Role = require("../models/role.js");
const officeStaff = require("../models/officeStaff.js");

exports.getStaff = async (req, res) => {
  try {
    const allstaff = await officeStaff.find();
    const allUser = await Users.find();
    const staff = allstaff.map((staff) => {
      const id = staff._id;
      const date_joined = staff.date_joined;

      const userData = allUser.filter((u) => u.id == staff.user_id);

      return {
        id,
        date_joined,
        userData,
      };
    });
    res.status(200).json({ msg: "success", data: staff });
  } catch (error) {
    res.status(404).json({ msg: "Data not Found", error: error.message });
  }
};

exports.createStaff = async (req, res) => {
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
      password: passwordHash,
      role: roleDoc._id,
      email,
    });
    const staff = await OfficeStaff.create({
      ...req.body,
      user_id: newUser._id,
    });
    res.status(200).json({ msg: "Staff added Successfully", staff, newUser });
  } catch (error) {
    res
      .status(400)
      .json({ msg: "Error in adding Staff", error: error.message });
  }
};
