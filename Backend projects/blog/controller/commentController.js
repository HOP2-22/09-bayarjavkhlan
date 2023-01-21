const commentModel = require("../models/commentModel");
const postModel = require("../models/postModel");
const userModel = require("../models/userModel");
const MyError = require("../utils/myError");
const asyncHandler = require("../middleWare/asyncHandler");

exports.getComments = asyncHandler(async (req, res, next) => {
  const comments = await commentModel.find();

  res.status(200).json({
    isDone: true,
    data: comments,
    message: "amjilttai bvh commentvvdiiig iin medeeleliig avlaa",
  });
});

exports.getCommentByPost = asyncHandler(async (req, res, next) => {
  const checkPost = await postModel.findById(req.params.id);

  if (!checkPost) {
    throw new MyError("iim idtai post alga bn", 404);
  }

  const commentByPost = await commentModel.find();

  const filteredComment = commentByPost.filter(
    (el) => el.postId === req.params.id
  );

  if (filteredComment.length === 0) {
    throw new MyError("ene post nd comment bichegdeegui bn");
  }

  res.status(200).json({
    isDone: true,
    data: filteredComment,
    message: "amjilttai postiin commentvvdiin medeeleliig avlaa",
  });
});

exports.getCommentByUser = asyncHandler(async (req, res, next) => {
  const checkUser = await userModel.findById(req.params.id);

  if (!checkUser) {
    throw new MyError("iim idtai user alga bn", 404);
  }

  const commentByUser = await commentModel.find();

  const filteredComment = commentByUser.filter(
    (el) => el.ownerId === req.params.id
  );

  res.status(200).json({
    isDone: true,
    data: filteredComment,
    message: "amjilttai useriin commentvvdiin medeeleliig avlaa",
  });
});

exports.createComment = asyncHandler(async (req, res, next) => {
  const createdPost = await commentModel.create(req.body);

  res.status(200).json({
    isDone: true,
    data: createdPost,
    message: "amjilttai comment vvsgellee",
  });
});

exports.updateComment = asyncHandler(async (req, res, next) => {
  const updatedComment = await commentModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      runValidators: true,
    }
  );

  if (!updatedComment) {
    return res.status(404).json({
      isDone: false,
      message: `iim ${req.params.id}-tai comment alga`,
    });
  }

  res.status(200).json({
    isDone: true,
    data: updatedComment,
    message: "amjilttai commentiin medeeliig oorchilloo",
  });
});

exports.deleteComment = asyncHandler(async (req, res, next) => {
  const deletedComment = await commentModel.findByIdAndDelete(req.params.id);

  if (!deletedComment) {
    return res.status(404).json({
      isDone: false,
      message: `iim ${req.params.id}-tai comment alga`,
    });
  }

  res.status(200).json({
    isDone: true,
    data: deletedComment,
    message: "amjilttai comment ustaglaa",
  });
});
