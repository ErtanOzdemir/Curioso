const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    isActive: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
