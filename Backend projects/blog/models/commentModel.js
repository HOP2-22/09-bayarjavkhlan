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
  ownerId: {
    type: String,
    required: [true, "Owneriin id giin oruulj ogno vv"],
  },
  //   Post: {
  //     ref: "posts",
  //     type: mongoose.Schema.ObjectId,
  //   },
  postId: { type: String, required: [true, "Postiin id giin oruulj ogno vv"] },
  publishDate: { type: Date, default: Date.now },
});

const comments = mongoose.model("comments", commentsModel);

module.exports = comments;
