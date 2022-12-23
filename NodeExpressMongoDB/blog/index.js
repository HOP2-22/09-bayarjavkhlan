const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/blogDB");

const userRoute = require("./routes/userRoute");
const postRoute = require("./routes/postRoute");

connectDB();

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(express.json());

app.use("user", userRoute);
app.use(postRoute);

app.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT}-дээр ажиллаж эхэллээ`.yellow);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`aldaa garjee: ${err.message}`.red.underline);
  server.close(() => {
    process.exit(1);
  });
});
