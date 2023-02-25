const express = require("express");

const {
  getPosts,
  getPost,
  getPostsByUser,
  createPost,
  updatePost,
  deletePost,
  addIntrested,
} = require("../controller/post");

const router = express.Router();

router.route("/").get(getPosts).post(createPost);
router.route("/:id/user").get(getPostsByUser);
router.route("/addIntrested").post(addIntrested);
router.route("/:id").get(getPost).put(updatePost).delete(deletePost);

module.exports = router;
