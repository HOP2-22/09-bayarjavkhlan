const shortModel = require("../models/shortModel");
const asyncHandler = require("../middleware/asyncHandler");
const MyError = require("../utils/myError");

exports.getAllShort = asyncHandler(async (req, res, next) => {
  const shorts = await shortModel.find();

  res.status(200).json({
    isDone: true,
    data: shorts,
    message: "амжилттай шилжлээ",
  });
});

exports.getOrignalByShort = asyncHandler(async (req, res, next) => {
  const orignal = await shortModel.find({ shortLink: req.params.id });

  if (!orignal) {
    throw new MyError(`богино линк алдаатай байна`, 404);
  }

  res.status(200).json({
    isDone: true,
    orignalLink: orignal[0].orignalLink,
    message: "амжилттай шилжлээ",
  });
});

exports.createShort = asyncHandler(async (req, res, next) => {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let stringId = "";
  for (let i = 0; i < 6; i++) {
    stringId += characters.charAt(Math.floor(Math.random() * 62));
  }

  const short = await shortModel.create({
    orignalLink: req.body.orignalLink,
    shortLink: stringId,
    user: req.body.user,
  });

  res.status(200).json({
    isDone: true,
    data: short,
    message: "амжилттай богино линк үүсгэллээ",
  });
});

exports.deleteShort = asyncHandler(async (req, res, next) => {
  const short = await shortModel.findById(req.params.id);

  if (!short) {
    throw new MyError(`ID алдаатай байна`, 404);
  }

  if (req.userId !== short.user && req.role !== "admin") {
    throw new MyError("өөрийнхөө богиноог л устгах боломжтой", 404);
  }

  short.remove();

  res.status(200).json({
    isDone: true,
    data: short,
    message: "амжилттай устаглаа",
  });
});
