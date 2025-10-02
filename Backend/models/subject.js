const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
  department_name: {
    type: String,
  },
  subject_name: {
    type: String,
  },
},{collection:"subjects"});
module.exports = mongoose.model("Subject", SubjectSchema);
