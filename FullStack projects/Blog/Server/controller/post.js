const paginate = require("../utils/paginate");
const asyncHandler = require("../middleWare/asyncHandler");
const MyError = require("../utils/myError");
const Post = require("../models/post");

exports.getPosts = asyncHandler(async (req, res, next) => {
  const posts = await Post.find({});

  res.status(200).json({
    success: true,
    data: posts,
    message: "Get all posts",
  });
});

exports.getPost = asyncHandler(async (req, res, next) => {
  const post = await Post.find({});

  res.status(200).json({
    success: true,
    data: post,
    message: "Get post information",
  });
});

exports.getPostsByUser = asyncHandler(async (req, res, next) => {});

exports.createPost = asyncHandler(async (req, res, next) => {});

exports.updatePost = asyncHandler(async (req, res, next) => {});

exports.deletePost = asyncHandler(async (req, res, next) => {});
