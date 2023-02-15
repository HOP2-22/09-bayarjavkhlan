const express = require("express");

const {
  //bvh Postiig avdag
  getPosts,

  //1 postiin medeeleliig avah
  getPost,

  //Hereglegchiin postuudiig avdag
  getPostsByUser,

  //post vvsgedeg
  createPost,

  //postoo update hiideg
  updatePost,

  //postoo ustagdag
  deletePost,
} = require("../controller/post");

const router = express.Router();

router.route("/").get(getPosts).post(createPost);
router.route("/user/:id/post").get(getPostsByUser);
router.route("/:id/post").get(getPost).put(updatePost).delete(deletePost);

module.exports = router;
