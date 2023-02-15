const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({});

const Post = mongoose.model("posts", postSchema);

module.exports = Post;
