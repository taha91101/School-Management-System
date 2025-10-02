const mongoose = require("mongoose");

const Schoolyear = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    start_date: {
      type: Date,
    },
    end_date: {
      type: Date,
    },
  },
  { collection: "schoolyears" }
);

module.exports = mongoose.model("SchoolYear", Schoolyear);
