const commentModel = require("../models/commentModel");

exports.getComments = async (req, res, next) => {
  try {
    const comments = await commentModel.find();

    res.status(200).json({
      isDone: true,
      data: comments,
      message: "amjilttai bvh commentvvdiiig iin medeeleliig avlaa",
    });
  } catch (err) {
    res.status(404).json({
      isDone: false,
      error: err,
    });
  }
};

exports.getCommentByPost = async (req, res, next) => {
  try {
    const commentByPost = await commentModel.find();

    const filteredComment = commentByPost.filter(
      (el) => el.postId === req.params.id
    );

    res.status(200).json({
      isDone: true,
      data: filteredComment,
      message: "amjilttai postiin commentvvdiin medeeleliig avlaa",
    });
  } catch (err) {
    res.status(404).json({
      isDone: false,
      error: err,
    });
  }
};

exports.getCommentByUser = async (req, res, next) => {
  try {
    const commentByUser = await commentModel.find();

    const filteredComment = commentByUser.filter(
      (el) => el.ownerId === req.params.id
    );

    res.status(200).json({
      isDone: true,
      data: filteredComment,
      message: "amjilttai useriin commentvvdiin medeeleliig avlaa",
    });
  } catch (err) {
    res.status(404).json({
      isDone: false,
      error: err,
    });
  }
};

exports.createComment = async (req, res) => {
  try {
    const createdPost = await commentModel.create(req.body);

    res.status(200).json({
      isDone: true,
      data: createdPost,
      message: "amjilttai comment vvsgellee",
    });
  } catch (err) {
    res.status(404).json({
      isDone: false,
      error: err,
    });
  }
};

exports.updateComment = async (req, res, next) => {
  try {
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
  } catch (err) {
    res.status(404).json({
      isDone: false,
      error: err,
    });
  }
};

exports.deleteComment = async (req, res, next) => {
  try {
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
  } catch (err) {
    res.status(404).json({
      isDone: false,
      error: err,
    });
  }
};
