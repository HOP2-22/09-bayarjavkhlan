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
  owner: {
    title: { type: String },
    firstName: {
      type: String,
      maxLength: [50, "lastname deed taldaa 50 temdegt baina"],
      minLength: [2, "lastname dood taldaa 2 temdegt baina"],
      required: true,
    },
    lastName: {
      type: String,
      maxLength: [50, "lastname deed taldaa 50 temdegt baina"],
      minLength: [2, "lastname dood taldaa 2 temdegt baina"],
      required: true,
    },
    gender: { type: String },
    email: { type: String, default: "user@email.com" },
    dateOfBirth: { type: Date },
    dateOfBirth: { type: Date, default: Date.now },
    phone: { type: Number, default: 99999999 },
    picture: { type: String, default: "no-photo.jpg" },
    location: {
      street: {
        type: String,
        maxLength: [100, "street deed taldaa 50 temdegt baina"],
        minLength: [5, "street dood taldaa 2 temdegt baina"],
      },
      city: {
        type: String,
        maxLength: [30, "city deed taldaa 50 temdegt baina"],
        minLength: [2, "city dood taldaa 2 temdegt baina"],
      },
      state: {
        type: String,
        maxLength: [30, "state deed taldaa 50 temdegt baina"],
        minLength: [2, "state dood taldaa 2 temdegt baina"],
      },
      country: {
        type: String,
        maxLength: [30, "country deed taldaa 50 temdegt baina"],
        minLength: [2, "country dood taldaa 2 temdegt baina"],
      },
      timezone: { type: String },
    },
  },
  // owner: {
  //   ref: "users",
  //   type: mongoose.Schema.ObjectId,
  // },
});

const posts = mongoose.model("posts", postsModel);

module.exports = posts;
