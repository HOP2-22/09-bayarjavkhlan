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
  const contact = await Contact.create(req.body);

  res.status(200).json({
    success: true,
    data: contact,
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
