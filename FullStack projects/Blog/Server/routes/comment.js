const express = require("express");

const {
  getComments,
  getCommentsByPost,
  createComment,
  updateComment,
  deleteComment,
} = require("../controller/comment");

const router = express.Router();

router.route("/").get(getComments).post(createComment);
router.route("/post/:id/comment").get(getCommentsByPost);
router.route("/:id/comment").put(updateComment).delete(deleteComment);

module.exports = router;
