const dotenv = require("dotenv");
const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");

const userModel = require("./models/userModel");
const postModel = require("./models/postModel");
const commentModel = require("./models/commentModel");

dotenv.config({ path: "./config/config.env" });

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
  useUnifiedTopology: true,
});

const users = JSON.parse(
  fs.readFileSync(__dirname + "./data/users.json", "utf-8")
);

const posts = JSON.parse(
  fs.readFileSync(__dirname + "./data/posts.json", "utf-8")
);

const comments = JSON.parse(
  fs.readFileSync(__dirname + "./data/comments.json", "utf-8")
);

const importData = async () => {
  try {
    await userModel.create(users);
    await postModel.create(users);
    await commentModel.create(users);
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await userModel.deleteMany(users);
    await postModel.deleteMany(users);
    await commentModel.deleteMany(users);
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
