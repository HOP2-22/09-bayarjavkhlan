const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/DB");

const userRoute = require("./routes/userRoute");
const shortRoute = require("./routes/shortRoute");
const errorHandler = require("./middleWare/error");

connectDB();

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(express.json());

app.use(userRoute);
// app.use(shortRoute);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT}-дээр ажиллаж эхэллээ`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`aldaa garjee: ${err.message}`.red.underline);
  server.close(() => {
    process.exit(1);
  });
});
