const mongoose = require("mongoose");

const usersModel = mongoose.Schema({
  name: {
    type: String,
    maxLength: [50, "нэр дээд талдаа 50 тэмдэгтэнд багтаана уу"],
    minLength: [2, "нэр доод талдаа 2 тэмдэгтэнд багтаана уу"],
    default: "user",
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Цахим хаягаа оруулна уу"],
  },
  password: {
    type: String,
    required: [true, "пасс аа оруулна уу"],
  },
  registerDate: { type: Date, default: Date.now },
});

const users = mongoose.model("users", usersModel);

module.exports = users;
