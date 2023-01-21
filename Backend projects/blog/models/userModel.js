const mongoose = require("mongoose");

const usersModel = mongoose.Schema({
  title: { type: String },
  firstName: {
    type: String,
    maxLength: [50, "lastname deed taldaa 50 temdegt baina"],
    minLength: [2, "lastname dood taldaa 2 temdegt baina"],
    required: true,
  },
  lastName: {
    type: String,
    maxLength: [50, "lastname deed taldaa 50 temdegt baina"],
    minLength: [2, "lastname dood taldaa 2 temdegt baina"],
    required: true,
  },
  gender: { type: String },
  email: { type: String, default: "user@email.com" },
  dateOfBirth: { type: Date },
  registerBirth: { type: Date, default: Date.now },
  phone: { type: Number, default: 99999999 },
  picture: { type: String, default: "no-photo.jpg" },
  location: {
    street: {
      type: String,
      maxLength: [100, "street deed taldaa 50 temdegt baina"],
      minLength: [5, "street dood taldaa 2 temdegt baina"],
    },
    city: {
      type: String,
      maxLength: [30, "city deed taldaa 50 temdegt baina"],
      minLength: [2, "city dood taldaa 2 temdegt baina"],
    },
    state: {
      type: String,
      maxLength: [30, "state deed taldaa 50 temdegt baina"],
      minLength: [2, "state dood taldaa 2 temdegt baina"],
    },
    country: {
      type: String,
      maxLength: [30, "country deed taldaa 50 temdegt baina"],
      minLength: [2, "country dood taldaa 2 temdegt baina"],
    },
    timezone: { type: String },
  },
});

const users = mongoose.model("users", usersModel);

module.exports = users;
