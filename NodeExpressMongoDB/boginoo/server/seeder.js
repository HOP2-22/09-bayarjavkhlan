const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
const shortModel = require("./models/shortModel");
const userModel = require("./models/userModel");

dotenv.config({ path: "./config/config.env" });

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const shorts = JSON.parse(
  fs.readFileSync(__dirname + "/data/users.json", "utf-8")
);
const users = JSON.parse(
  fs.readFileSync(__dirname + "/data/shorts.json", "utf-8")
);

const importData = async () => {
  try {
    await shortModel.create(shorts);
    await userModel.create(users);
    console.log("ogogdliig importloloo".green.inverse);
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await shorts.deleteMany();
    await users.deleteMany();
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
