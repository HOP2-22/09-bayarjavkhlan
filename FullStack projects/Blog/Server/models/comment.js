const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      maxLength: [500, "max 500 characters"],
      minLength: [4, "at least 4 characters"],
    },
    publishedDate: {
      type: Date,
      default: new Date(),
    },
    post: {
      type: mongoose.Schema.ObjectId,
      ref: "posts",
      required: true,
    },
    writerId: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

commentSchema.virtual("writer", {
  ref: "users",
  localField: "writerId",
  foreignField: "_id",
  justOne: true,
});

const Comment = mongoose.model("comments", commentSchema);

module.exports = Comment;
