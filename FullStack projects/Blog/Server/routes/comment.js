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
router.route("/:id/post").get(getCommentsByPost);
router.route("/:id").put(updateComment).delete(deleteComment);

module.exports = router;
