const mongoose = require("mongoose");

const AttendenceSchema = new mongoose.Schema({
  student_id: mongoose.Schema.Types.ObjectId,
  Status: {
    type: String,
  },
  school_year_id: mongoose.Schema.Types.ObjectId,
  marked_at: {
    type: Date,
  },
  teacher_id: mongoose.Schema.Types.ObjectId,
  year_level_id: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("Attendence", AttendenceSchema);
