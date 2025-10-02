const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      toLowerCase: true,
    },
  },
  { collection: "roles" }
);

module.exports = mongoose.model("role", roleSchema);
