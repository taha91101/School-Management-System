const express = require("express");
const Director = require("../models/director.js");
const Role = require("../models/role.js");
const User = require("../models/user.js");
const bcrypt = require("bcrypt")
exports.CreateDirector = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    const roleDocs = await Role.findOne({ name: { $in: role } });
    const role_id = roleDocs._id;
    console.log(role_id);
    
    const createUser = await User.create({
      ...req.body,
      password: passwordHash,
      role : role_id,
      email,
    });
console.log(createUser);

    await Director.create({
      user_id: createUser._id,
    });
    res.status(200).json({ msg: "Director register Successfully" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
