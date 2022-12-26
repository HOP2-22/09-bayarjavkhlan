const mongoose = require("mongoose");

const tagsModel = mongoose.Schema({
  tag: { type: Array },
});

const tags = mongoose.model("tags", tagsModel);

module.exports = tags;
