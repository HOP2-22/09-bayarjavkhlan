//Хуудаслалт
const paginate = require("../utils/paginate");

const Comment = require("../models/comment");

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

exports.getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({});

    res.status(200).json({
      success: true,
      data: comments,
      message: "амжилттай комэнтүүдийн мэдээлэлийг авлаа",
    });
  } catch (error) {
    next(error);
  }
};

exports.getCommentsByPost = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

exports.createComment = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

exports.updateComment = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

exports.deleteComment = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
