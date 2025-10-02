const mongoose = require("mongoose");

const YearLevel = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
level_name:{
    type:String
}
},{collection:"yearlevels"});

module.exports = mongoose.model("YearLevel", YearLevel);
