const mongoose = require("mongoose");

const yearlevelfeeSchema = new mongoose.Schema({
  school_year_id: mongoose.Schema.Types.ObjectId,
  amount: {
    type: Number,
  },
},{collection:"yearlevelfee"});

module.exports = mongoose.model("yearlevelfee", yearlevelfeeSchema);
