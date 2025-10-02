const mongoose = require("mongoose");

const FeeRecordSchema = new mongoose.Schema({
  fee_record_id: mongoose.Schema.Types.ObjectId,
  yearlevelfee_id: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("yearlevelfeeRecord", FeeRecordSchema);
