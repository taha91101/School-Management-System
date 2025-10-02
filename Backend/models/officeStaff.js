const mongoose = require("mongoose");

const officeSchema = new mongoose.Schema(
  {
    user_id: mongoose.Schema.Types.ObjectId,
    date_joined: {
      type: Date,
      required: true,
    },
  },
  { collection: "officeStaff" }
);

module.exports = mongoose.model("Office", officeSchema);
