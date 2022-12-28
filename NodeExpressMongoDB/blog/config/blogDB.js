const mongoose = require("mongoose");
const colors = require("colors");

const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(
    `MongoDB holbogdloo:${conn.connection.host}`.green.underline.bold
  );
};

module.exports = connectDB;
