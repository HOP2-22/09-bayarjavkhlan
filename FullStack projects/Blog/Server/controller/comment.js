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

exports.getCommentsByPost = asyncHandler(async (req, res, next) => {});

exports.createComment = asyncHandler(async (req, res, next) => {});

exports.updateComment = asyncHandler(async (req, res, next) => {});

exports.deleteComment = asyncHandler(async (req, res, next) => {});
