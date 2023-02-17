const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Write your name"],
  },
  email: {
    type: String,
    required: [true, "Write your email address"],
    unique: false,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Your email is not email address",
    ],
  },
  text: {
    type: Array,
    required: [true, "Write description"],
    maxLength: [300, "Maximum length of description is 300"],
    minLength: [20, "Minimum length of description is 20"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.model("contacts", contactSchema);

module.exports = Contact;
