const mongoose = require("mongoose");

const commentsModel = mongoose.Schema({
  message: {
    type: String,
    maxLength: [500, "comment deed taldaa 500 temdegtend bagtah yostoi"],
    minLength: [2, "comment dood taldaa 2 temdegtend bagtah yostoi"],
  },
  // owner: {
  //   ref: "users",
  //   type: mongoose.Schema.ObjectId,
  // },
  //   Post: {
  //     ref: "posts",
  //     type: mongoose.Schema.ObjectId,
  //   },
  publishDate: { type: Date, default: Date.now },
});

const comments = mongoose.model("comments", commentsModel);

module.exports = comments;
