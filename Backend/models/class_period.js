const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
  subject_id: mongoose.Schema.Types.ObjectId,
  teacher_id: mongoose.Schema.Types.ObjectId,
  start_period_id: {type:String},
  end_period_id: {type:String},
  classroom_no: {
    type: String,
  },
  name: {
    type: String,
  },
});

module.exports = mongoose.model("Class",ClassSchema)
