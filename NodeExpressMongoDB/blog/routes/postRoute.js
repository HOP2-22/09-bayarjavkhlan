const express = require("express");

const {
  getPosts,
  getPostsByUser,
  // getPostsByTag,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("../controller/postController");

const postRouter = express.Router();

postRouter.route("/post").get(getPosts);
postRouter.route("/post/create").post(createPost);

postRouter.route("/user/:id/post").get(getPostsByUser);

// postRouter.route("/tag/:id/post").get(getPostsByTag);

postRouter
  .route("/post/:id/")
  .get(getPostById)
  .put(updatePost)
  .delete(deletePost);

module.exports = postRouter;
