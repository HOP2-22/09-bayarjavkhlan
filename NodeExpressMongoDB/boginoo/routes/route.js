const express = require("express");

const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("../controller/controller");

const postRouter = express.Router();

postRouter.route("/post").get(getPosts);
postRouter.route("/post/create").post(createPost);
postRouter.route("/post/deleteAll").get(getPosts);

postRouter
  .route("/post/:id/")
  .get(getPostById)
  .put(updatePost)
  .delete(deletePost);

module.exports = postRouter;
