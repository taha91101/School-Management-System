const mongoose = require("mongoose");

const directorSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  user_id: mongoose.Schema.Types.ObjectId,
},{collection:"director"});


module.exports = mongoose.model("Director", directorSchema)