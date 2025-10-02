require("dotenv").config();

const Users = require("../models/user.js");

const RoleSchema = require("../models/role.js");

const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const teacher = require("../models/teacher.js");
const SECRET_KEY = process.env.SECRET_KEY;

exports.LoginDirector = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    const roleId = await RoleSchema.findById(user.role);
    const role = roleId.name;

    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const TeacherID = await teacher.find({ user_id: user.id });
    const ID =  TeacherID.map((e)=>e.id)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json("Invalid email and passowrd");
    }
    const Token = JWT.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1d" });
    console.log(user);
    res.status(200).json({
      Token,
      data: user,
      role,
      ID,
      message: "Login Successfull",
    });
  } catch (error) {
    res.status(404).json({ message: "Login Unsuccess", err: error.message });
  }
};
