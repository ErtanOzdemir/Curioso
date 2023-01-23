const mongoose = require("mongoose");

const { Schema } = mongoose;

const voteSchema = new Schema(
  {
    upVote: [{ type: Schema.Types.ObjectId, ref: "User" }],
    downVote: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const messageSchema = new Schema(
  {
    message: String,
    creator: {
      ref: "User",
      type: Schema.Types.ObjectId,
    },
    email: String,
    votes: { type: voteSchema },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
