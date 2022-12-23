const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://Jawkhlan1224:Jawhaa1224@amazonrestapi.q5rptry.mongodb.net/HOP2?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  console.log(process.env.MONGODB_URI);
  console.log(
    `MongoDB holbogdloo:${conn.connection.host}`.green.underline.bold
  );
};

module.exports = connectDB;
