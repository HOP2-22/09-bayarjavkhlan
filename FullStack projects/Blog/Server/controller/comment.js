const paginate = require("../utils/paginate");
const asyncHandler = require("../middleWare/asyncHandler");
const MyError = require("../utils/myError");
const Comment = require("../models/comment");

exports.getComments = asyncHandler(async (req, res, next) => {
  const comments = await Comment.find({});

  res.status(200).json({
    success: true,
    data: comments,
    message: "Get all comments",
  });
});

exports.getCommentsByPost = asyncHandler(async (req, res, next) => {
  const comments = await Comment.find({ post: req.params.id }).populate(
    "writer"
  );

  res.status(200).json({
    success: true,
    data: comments,
    message: "Get post comments",
  });
});

exports.createComment = asyncHandler(async (req, res, next) => {
  const comment = await Comment.create(req.body);

  res.status(200).json({
    success: true,
    data: comment,
    message: "comment created",
  });
});

exports.updateComment = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!comment) {
    throw new MyError("No Comment found");
  }

  res.status(200).json({
    success: true,
    data: comment,
    message: "comment updated successfully",
  });
});

exports.deleteComment = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findByIdAndDelete(req.params.id);

  if (!comment) {
    throw new MyError("No Comment found");
  }

  res.status(200).json({
    success: true,
    data: comment,
    message: "comment deleted successfully",
  });
});
