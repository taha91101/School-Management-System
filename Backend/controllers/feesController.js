const FeeRecordModel = require("../models/FeeRecord.js");
const YearLevelFeeModel = require("../models/yearlevelfee.js");
const FeeRecordYearLevelFeeModel = require("../models/fee_record_yearlevelfee.js");
const SchoolYearModel = require("../models/schoolyear.js");
const studentyearlevel = require("../models/student_year_level.js");
const yearlevel = require("../models/yearlevel.js");

const levelFee = {
  nursery: 3000,
  LKG: 3500,
  UKG: 3700,
  1: 4000,
  2: 4500,
  3: 4500,
  4: 4500,
  5: 5000,
  6: 5500,
  7: 6000,
  8: 6500,
  9: 7000,
  10: 7500,
  11: 10000,
  12: 11000,
};
exports.feeSubmission = async (req, res) => {
  try {
    const { id } = req.params; // student_year_level id lana hai
    const student_id = id;
    const {
      fee_type,
      month,
      total_amount,
      paid_amount,
      due_amount,
      payment_date,
      receipt_number,
      late_fee,
      payment_status,
      remarks,
      signature,
    } = req.body;

    const feeRecord = await FeeRecordModel.create({
      student_id,
      fee_type,
      month,
      total_amount,
      paid_amount,
      due_amount,
      payment_date,
      receipt_number,
      late_fee,
      payment_status,
      remarks,
      signature,
    });

    const studInfo = await studentyearlevel.find({ _id: student_id });
    // console.log(studInfo);

    const classnameId = studInfo[0].year_level_id;
    // console.log(classnameId);

    const classObj = await yearlevel.find({ _id: classnameId });
    // console.log(classObj);

    const classname = classObj[0].level_name;
    // console.log(classname);

    const amount = levelFee[classname];

    const schoolyear = await SchoolYearModel.find();

    const yearlevelfee = await YearLevelFeeModel.create({
      school_year_id: schoolyear[0]._id,
      amount: amount,
    });

    const feerecordyearlevelfee = await FeeRecordYearLevelFeeModel.create({
      fee_record_id: feeRecord._id,
      yearlevelfee_id: yearlevelfee._id,
    });
    return res.status(200).json({
      message: "Fee Deposit Successfully",
      yearlevelfee,
      schoolyear,
      studInfo,
      classnameId,
      classObj,
      classname,
      amount,
      feerecordyearlevelfee,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "fee submission failed", error: error.message });
  }
};

exports.feeDetails = async (req, res) => {
  try {
    const { id } = req.params

    const feeData = await FeeRecordModel.find({ student_id:id });
    res.status(200).json({ msg: "Fee Record", data: feeData });
  } catch (error) {
    res.status(400).json({ msg: "Fee Record not found", error: error.message });
  }
};
