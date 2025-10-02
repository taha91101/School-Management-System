const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  middle_name: {
    type: String,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    tolowercase: true,
    trim: true,
  },
  phone_no: {
    type: Number,
    maxLength: 10,
  },
  gender: {
    type: String,
  },
  role: mongoose.Schema.Types.ObjectId,
  user_profile: {
    filename: String,
    mimetype: String,
    data: Buffer,
    contentType: String,
  },
});
module.exports = mongoose.model("User", UserSchema);
