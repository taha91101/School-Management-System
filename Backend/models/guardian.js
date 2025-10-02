const mongoose = require("mongoose");

const guardianSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  adhaar_no: {
    type: Number,
    // required: true,
    maxlength: 12,
  },
  pan_no: {
    type: String,
  },
  annual_income: {
    type: Number,
  },
  qualification: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
  },
});

module.exports = mongoose.model("Guardian", guardianSchema);
