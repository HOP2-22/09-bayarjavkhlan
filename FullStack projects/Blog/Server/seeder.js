const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

const Comment = require("./models/comment");
const Contact = require("./models/contact");
const Post = require("./models/post");
const User = require("./models/user");

dotenv.config({ path: "./config/config.env" });

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const comment = JSON.parse(
  fs.readFileSync(__dirname + "/data/comment.json", "utf-8")
);
const contact = JSON.parse(
  fs.readFileSync(__dirname + "/data/contact.json", "utf-8")
);
const post = JSON.parse(
  fs.readFileSync(__dirname + "/data/post.json", "utf-8")
);
const user = JSON.parse(
  fs.readFileSync(__dirname + "/data/user.json", "utf-8")
);

const importData = async () => {
  try {
    await Comment.create(comment);
    await Contact.create(contact);
    await Post.create(post);
    await User.create(user);
    console.log("ogogdliig importloloo".green.inverse);
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await Comment.deleteMany();
    await Contact.deleteMany();
    await Post.deleteMany();
    await User.deleteMany();
    console.log("ogogdliig bvgdiig ustaglaa".green.inverse);
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
