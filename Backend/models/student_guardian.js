const mongoose = require("mongoose");

const studentGuardianSchema = new mongoose.Schema({
  student_id: mongoose.Schema.Types.ObjectId,
  guardian_id: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("StudentGuardian", studentGuardianSchema);
