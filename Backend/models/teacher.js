const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  adhaar_no: {
    type: Number,
    required: true,
    minlength: 12,
    maxlength: 12,
  },
  pan_no: {
    type: String,
    minlength: 10,
    maxlength: 10,
  },
  qualification: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Teacher", teacherSchema);
