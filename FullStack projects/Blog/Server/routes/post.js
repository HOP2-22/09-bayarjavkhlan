const express = require("express");

const {
  getPosts,
  getPost,
  getPostsByUser,
  createPost,
  updatePost,
  deletePost,
} = require("../controller/post");

const router = express.Router();

router.route("/").get(getPosts).post(createPost);
router.route("/user/:id/post").get(getPostsByUser);
router.route("/:id/post").get(getPost).put(updatePost).delete(deletePost);

module.exports = router;
