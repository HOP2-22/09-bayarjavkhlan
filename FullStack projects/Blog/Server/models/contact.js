const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({});

const Contact = mongoose.model("contacts", contactSchema);

module.exports = Contact;
