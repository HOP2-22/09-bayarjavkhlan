const mongoose = require("mongoose");
const userModel = require("./userModel");

const postsModel = mongoose.Schema({
  text: {
    type: String,
    maxLength: [1000, "text deed taldaa 1000 temdegt baina"],
    minLength: [6, "text dood taldaa 6 temdegt baina"],
    required: true,
  },
  image: { type: String, default: "no-photo.jpg" },
  likes: {
    type: Number,
    default: 0,
  },
  link: {
    type: String,
    maxLength: [200, "link deed taldaa 50 temdegt baina"],
    minLength: [6, "link dood taldaa 2 temdegt baina"],
  },
  tags: { type: Array },
  publishDate: { type: Date, default: Date.now },
  // owner: {
  //   ref: "users",
  //   type: mongoose.Schema.ObjectId,
  // },
});

const posts = mongoose.model("posts", postsModel);

module.exports = posts;
