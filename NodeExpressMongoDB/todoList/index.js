const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/DB");

const todoRoute = require("./routes/route");

connectDB();

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(express.json());

app.use(todoRoute);

app.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT}-дээр ажиллаж эхэллээ`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`aldaa garjee: ${err.message}`.red.underline);
  server.close(() => {
    process.exit(1);
  });
});
