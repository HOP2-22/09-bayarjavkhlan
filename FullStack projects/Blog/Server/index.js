const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/DB");
const cors = require("cors");

const comment = require("./routes/comment");
const contact = require("./routes/contact");
const subscribe = require("./routes/subscribe");
const post = require("./routes/post");
const user = require("./routes/user");
const errorHandler = require("./middleWare/error");

connectDB();

dotenv.config({ path: "./config/config.env" });

const app = express();
app.use(cors());

app.use(express.json());

app.use("/comment", comment);
app.use("/contact", contact);
app.use("/subscribe", subscribe);
app.use("/post", post);
app.use("/user", user);
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
