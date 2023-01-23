const mongoose = require("mongoose");

const { Schema } = mongoose;

const roomSchema = new Schema(
  {
    title: String,
    link: String,
    creator: { type: Schema.Types.ObjectId, ref: "User" },
    messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
    isActive: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", roomSchema);
