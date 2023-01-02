const model = require("../models/model");
const asyncHandler = require("../middleWare/asyncHandler");
const MyError = require("../utils/myError");

exports.getPosts = asyncHandler(async (req, res, next) => {
  const posts = await model.find();

  res.status(200).json({
    isDone: true,
    data: posts,
    message: "amjilttai bvh post iin medeeleliig avlaa",
  });
});

exports.getPostById = asyncHandler(async (req, res, next) => {
  const postsById = await model.findById(req.params.id);

  if (!postsById) {
    throw new MyError(`iim ${req.params.id}-tai post alga`, 404);
  }

  res.status(200).json({
    isDone: true,
    data: postsById,
    message: "amjilttai postiin medeeleliig avlaa",
  });
});

exports.createPost = asyncHandler(async (req, res, next) => {
  const createdPost = await model.create(req.body);

  res.status(200).json({
    isDone: true,
    data: createdPost,
    message: "amjilttai post vvsgellee",
  });
});

exports.updatePost = asyncHandler(async (req, res, next) => {
  const updatedPosted = await model.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
  });

  if (!updatedPosted) {
    throw new MyError(`iim ${req.params.id}-tai post alga`, 404);
  }

  res.status(200).json({
    isDone: true,
    data: updatedPosted,
    message: "amjilttai postiin medeeliig oorchilloo",
  });
});

exports.deletePost = asyncHandler(async (req, res, next) => {
  const deletedPost = await model.findByIdAndDelete(req.params.id);

  if (!deletedPost) {
    throw new MyError(`iim ${req.params.id}-tai post alga`, 404);
  }

  res.status(200).json({
    isDone: true,
    data: deletedPost,
    message: "amjilttai post ustaglaa",
  });
});
