const mongoose = require("mongoose");

const shortModel = mongoose.Schema({
  orignalLink: {
    type: String,
    required: true,
  },
  shortLink: {
    type: String,
    unique: true,
    required: true,
  },
  ownerId: {
    type: String,
  },
  registerDate: { type: Date, default: Date.now },
});

const shorts = mongoose.model("histories", shortModel);

module.exports = shorts;
