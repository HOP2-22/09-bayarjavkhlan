const mongoose = require("mongoose");

const subscribeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Write your email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Your email is not email address",
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Subscribe = mongoose.model("subscribes", subscribeSchema);

module.exports = Subscribe;
