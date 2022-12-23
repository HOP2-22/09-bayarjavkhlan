const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/todoDB");

const todoRoute = require("./routes/todoRoute");

connectDB();

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(express.json());

console.log("route aldaa zaaj bn".red);

app.use(todoRoute);

app.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT}-дээр ажиллаж эхэллээ`);
});
