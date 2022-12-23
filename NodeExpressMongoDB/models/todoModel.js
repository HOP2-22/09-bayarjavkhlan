const mongoose = require("mongoose");

const todoModel = mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: [50, "title aa 50 temdegtend bagtaana uu"],
  },
  detail: {
    type: String,
    maxLength: [300, "delegrenguig 300 temdegtend bagtaana uu"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const todo = mongoose.model("todoList", todoModel);

module.exports = todo;
