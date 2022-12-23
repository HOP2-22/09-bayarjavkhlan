const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://Jawkhlan1224:Jawhaa1224@amazonrestapi.q5rptry.mongodb.net/Blog?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  console.log(
    `MongoDB holbogdloo:${conn.connection.host}`.green.underline.bold
  );
};

module.exports = connectDB;
