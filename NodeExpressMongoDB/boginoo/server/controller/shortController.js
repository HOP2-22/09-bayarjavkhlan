const shortModel = require("../models/shortModel");
const asyncHandler = require("../middleware/asyncHandler");
const MyError = require("../utils/myError");

exports.getShorts = asyncHandler(async (req, res, next) => {
  const shorts = await shortModel.find();

  res.status(200).json({
    isDone: true,
    data: shorts,
    message: "амжилттай мэдээлэлүүдийг авлаа",
  });
});

exports.getShortById = asyncHandler(async (req, res, next) => {
  const short = await shortModel.findById(req.params.id);

  if (!short) {
    throw new MyError(`богиноо алдаатай байна`, 404);
  }

  res.status(200).json({
    isDone: true,
    data: short,
    message: "амжилттай богиноо авлаа",
  });
});

exports.getShortsByUser = asyncHandler(async (req, res, next) => {
  const shortsByUser = await shortModel.find({ ownerId: req.params.id });

  if (!shortsByUser) {
    throw new MyError(`хэрэглэгч алдаатай байна`, 404);
  }

  res.status(200).json({
    isDone: true,
    data: shortsByUser,
    message: "амжилттай хэрэглэгчийн богиноонуудыг авлаа",
  });
});

exports.createShort = asyncHandler(async (req, res, next) => {
  const createdShort = await shortModel.create(req.body);

  res.status(200).json({
    isDone: true,
    data: createdShort,
    message: "амжилттай богиноо үүсгэллээ",
  });
});

exports.updateShort = asyncHandler(async (req, res, next) => {
  const updatedShort = await shortModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      runValidators: true,
    }
  );

  if (!updatedShort) {
    throw new MyError(`ID алдаатай байна`, 404);
  }

  res.status(200).json({
    isDone: true,
    data: updatedShort,
    message: "амжилттай шинчиллээ",
  });
});

exports.deleteShort = asyncHandler(async (req, res, next) => {
  const deleteShort = await shortModel.findByIdAndDelete(req.params.id);

  if (!deleteShort) {
    throw new MyError(`ID алдаатай байна`, 404);
  }

  res.status(200).json({
    isDone: true,
    data: deleteShort,
    message: "амжилттай устаглаа",
  });
});
