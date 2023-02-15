const express = require("express");

const {
  //bvh commentiig avdag
  getComments,

  //post bolgonii commentiig avdag
  getCommentsByPost,

  //comment bichdeg
  createComment,

  //commentoo update hiideg
  updateComment,

  //commentoo ustagdag
  deleteComment,
} = require("../controller/comment");

const router = express.Router();

router.route("/").get(getComments).post(createComment);
router.route("/post/:id/comment").get(getCommentsByPost);
router.route("/:id/comment").put(updateComment).delete(deleteComment);

module.exports = router;
