const mongoose = require("mongoose");

const studentYearSchema = new mongoose.Schema({
  student_id: mongoose.Schema.Types.ObjectId,
  year_level_id: mongoose.Schema.Types.ObjectId,
  school_year_id: mongoose.Schema.Types.ObjectId,
 
});

module.exports = mongoose.model("StudentYear", studentYearSchema);
