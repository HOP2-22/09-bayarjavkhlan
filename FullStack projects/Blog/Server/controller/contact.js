const asyncHandler = require("../middleWare/asyncHandler");
const Contact = require("../models/contact");

exports.getContacts = asyncHandler(async (req, res, next) => {
  const contacts = await Contact.find({});

  res.status(200).json({
    success: true,
    data: contacts,
    message: "Get all contacts",
  });
});

exports.createContact = asyncHandler(async (req, res, next) => {
  const user = await Contact.findOne({ email: req.body.email });

  if (user) {
    user.text.push(req.body.text);
    user.name = req.body.name;
    user.save();
  } else {
    await Contact.create(req.body);
  }

  res.status(200).json({
    success: true,
    data: user,
    message: "Send your contact",
  });
});

exports.deleteContact = asyncHandler(async (req, res, next) => {
  const { id } = req.body;

  const contact = await Contact.findByIdAndDelete(id);

  res.status(200).json({
    success: true,
    data: contact,
    message: "Contact deleted",
  });
});
