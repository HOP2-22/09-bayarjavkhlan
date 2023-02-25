const paginate = require("../utils/paginate");
const asyncHandler = require("../middleWare/asyncHandler");
const MyError = require("../utils/myError");
const Post = require("../models/post");

exports.getPosts = asyncHandler(async (req, res, next) => {
  const { select, sort } = req.query;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 9;
  ["page", "limit", "select", "sort"].map((el) => delete req.query[el]);

  const pagination = await paginate(Post, page, limit);

  const posts = await Post.find({}, select)
    .populate("user")
    .sort(sort)
    .skip(pagination.start - 1)
    .limit(pagination.limit);

  if (!posts) {
    throw new MyError("No posts found");
  }

  res.status(200).json({
    success: true,
    pagination,
    data: posts,
    message: "Get all posts",
  });
});

exports.getPost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id)
    .populate("user")
    .populate("comments");

  if (!post) {
    throw new MyError("No post found");
  }

  res.status(200).json({
    success: true,
    data: post,
    message: "Get post information",
  });
});

exports.getPostsByUser = asyncHandler(async (req, res, next) => {
  const { select, sort } = req.query;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 9;
  ["page", "limit", "select", "sort"].map((el) => delete req.query[el]);

  const pagination = await paginate(Post, page, limit);

  const posts = await Post.find({ owner: req.params.id }, select)
    .populate("user")
    .sort(sort)
    .skip(pagination.start - 1)
    .limit(pagination.limit);

  res.status(200).json({
    success: true,
    pagination,
    data: posts,
    message: "Get post information",
  });
});

exports.createPost = asyncHandler(async (req, res, next) => {
  const post = await Post.create(req.body);

  post.bgImageGenerator(req.body.image);
  post.save();

  res.status(200).json({
    success: true,
    data: post,
    message: "Post created",
  });
});

exports.addIntrested = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.body.id);

  if (!post) {
    throw new MyError("No post found");
  }

  post.intrested++;
  post.save();

  res.status(200).json({
    success: true,
    data: post,
    message: "post updated successfully",
  });
});

exports.updatePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!post) {
    throw new MyError("No post found");
  }

  res.status(200).json({
    success: true,
    data: post,
    message: "post updated successfully",
  });
});

exports.deletePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    throw new MyError("No post found");
  }

  post.remove();

  res.status(200).json({
    success: true,
    data: post,
    message: "post deleted successfully",
  });
});
