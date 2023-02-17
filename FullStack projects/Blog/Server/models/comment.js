const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({});

const Comment = mongoose.model("comments", commentSchema);

module.exports = Comment;
