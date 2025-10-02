const mongoose = require("mongoose");

const AdmissionSchema = new mongoose.Schema({
  student_id: mongoose.Schema.Types.ObjectId,
  admission_date: {
    type: Date,
    required: true,
  },
  previous_school_name: {
    type: String,
  },
  previous_standard_studied: {
    type: String,
  },
  tc_letter: {
    type: String,
  },
  guardian_id: mongoose.Schema.Types.ObjectId,
  year_level_id: mongoose.Schema.Types.ObjectId,
  school_year_id: mongoose.Schema.Types.ObjectId,
  emergency_contact_no: {
    type: Number,
  },
  address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Admission", AdmissionSchema);
