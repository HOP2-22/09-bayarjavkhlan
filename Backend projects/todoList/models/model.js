const mongoose = require("mongoose");

const model = mongoose.Schema({
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

const todoModel = mongoose.model("lists", model);

module.exports = todoModel;
