const mongoose = require("mongoose");
const student = require("./student");

const FeeRecord = new mongoose.Schema({
  student_id: mongoose.Schema.Types.ObjectId,
  fee_type: {
    type: String,
    required: true,
    trim: true,
  },
  month: {
    type: String,
    required: true,
  },
  total_amount: {
    type: Number,
    required: true,
  },
  paid_amount: {
    type: String,
    required: true,
  },
  due_amount: {
    type: Number,
    required: true,
  },
  payment_date: {
    type: Date,
    required: true,
  },
  receipt_number: {
    type: String,
    required: true,
  },
  late_fee: {
    type: Number,
  },
  payment_status: {
    type: String,
  },
  remarks: {
    type: String,
  },
  signature: {
    type: String,
  },
},{collection:"feeRecord"});

module.exports = mongoose.model("FeeSchema", FeeRecord);
