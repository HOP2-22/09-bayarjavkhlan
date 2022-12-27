const express = require("express");

const {
  getComments,
  getCommentByPost,
  getCommentByUser,
  createComment,
  updateComment,
  deleteComment,
} = require("../controller/commentController");

const commentRouter = express.Router();

commentRouter.route("/comment").get(getComments);
commentRouter.route("/post/:id/comment").get(getCommentByPost);
commentRouter.route("/user/:id/comment").get(getCommentByUser);
commentRouter.route("/comment/create").post(createComment);
commentRouter.route("/comment/:id").put(updateComment).delete(deleteComment);

module.exports = commentRouter;
