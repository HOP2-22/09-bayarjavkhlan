const postModel = require("../models/postModel");
const asyncHandler = require("../middleWare/asyncHandler");
const MyError = require("../utils/myError");

exports.getPosts = asyncHandler(async (req, res, next) => {
  const posts = await postModel.find();

  res.status(200).json({
    isDone: true,
    data: posts,
    message: "amjilttai bvh post iin medeeleliig avlaa",
  });
});

exports.getPostsByUser = asyncHandler(async (req, res, next) => {
  const postsById = await postModel.find();

  const filteredPosts = postsById.filter((el) => el.ownerId === req.params.id);

  if (checkTag.length === 0) {
    throw new MyError("ene user post hiigeegui bn", 404);
  }

  res.status(200).json({
    isDone: true,
    data: filteredPosts,
    message: "amjilttai user iin bvh postiig avlaa",
  });
});

exports.getPostsByTag = asyncHandler(async (req, res, next) => {
  const postsByTag = await postModel.find();

  const checkTag = postsByTag.filter((el) => {
    if (el.tags.includes(req.params.id)) {
      return el;
    }
  });

  if (checkTag.length === 0) {
    throw new MyError("iim tagtai post alga bn", 404);
  }

  res.status(200).json({
    isDone: true,
    data: checkTag,
    message: "amjilttai tag iin bvh postiig avlaa",
  });
});

exports.getPostById = asyncHandler(async (req, res, next) => {
  const postsById = await postModel.findById(req.params.id);

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
  const createdPost = await postModel.create(req.body);

  res.status(200).json({
    isDone: true,
    data: createdPost,
    message: "amjilttai post vvsgellee",
  });
});

exports.updatePost = asyncHandler(async (req, res, next) => {
  const updatedPosted = await postModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      runValidators: true,
    }
  );

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
  const deletedPost = await postModel.findByIdAndDelete(req.params.id);

  if (!deletedPost) {
    throw new MyError(`iim ${req.params.id}-tai post alga`, 404);
  }

  res.status(200).json({
    isDone: true,
    data: deletedPost,
    message: "amjilttai post ustaglaa",
  });
});
