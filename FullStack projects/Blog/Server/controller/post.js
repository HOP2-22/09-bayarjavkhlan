//Хуудаслалт
const paginate = require("../utils/paginate");

const Post = require("../models/post");

exports.ExampleCode = async (req, res, next) => {
  const Example = {};
  try {
    const example = await Example.find({});

    res.status(200).json({
      success: true,
      data: example,
      message: "жишээ api function иймэрхүү маягаар code oo бичнэ",
    });
  } catch (error) {
    //Хэрэв алдаа гарвал error middle ware ажилна
    //Хаана байгаа ../middleware/error.js
    next(error);
  }
};

exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({});

    res.status(200).json({
      success: true,
      data: posts,
      message: "амжилттай постуудийн мэдээлэлийг авлаа",
    });
  } catch (error) {
    next(error);
  }
};

exports.getPost = async (req, res, next) => {
  try {
    const post = await Post.find({});

    res.status(200).json({
      success: true,
      data: post,
      message: "амжилттай постийн мэдээлэлийг авлаа",
    });
  } catch (error) {
    next(error);
  }
};

exports.getPostsByUser = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

exports.createPost = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
