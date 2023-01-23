const mongoose = require("mongoose");

const shortSchema = mongoose.Schema(
  {
    orignalLink: {
      type: String,
      required: true,
    },
    shortLink: {
      type: String,
      unique: true,
      required: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
    },
    createdAt: { type: Date, default: Date.now },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const shorts = mongoose.model("histories", shortSchema);

module.exports = shorts;
