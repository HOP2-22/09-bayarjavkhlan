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

exports.getOrignalByShort = asyncHandler(async (req, res, next) => {
  const orignalByShort = await shortModel.find({ shortLink: req.params.id });

  if (!orignalByShort) {
    throw new MyError(`богино линк алдаатай байна`, 404);
  }

  res.status(200).json({
    isDone: true,
    data: orignalByShort,
    message: "амжилттай шилжлээ",
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
    message: "амжилттай хэрэглэгчийн богино линкүүдийг авлаа",
  });
});

exports.createShort = asyncHandler(async (req, res, next) => {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let stringId = "";
  for (let i = 0; i < 6; i++) {
    stringId += characters.charAt(Math.floor(Math.random() * 62));
  }

  const createdShort = await shortModel.create({
    orignalLink: req.body.orignalLink,
    shortLink: stringId,
    ownerId: req.body.ownerId,
  });

  res.status(200).json({
    isDone: true,
    data: createdShort,
    message: "амжилттай богино линк үүсгэллээ",
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
