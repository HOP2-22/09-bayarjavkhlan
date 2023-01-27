const colors = require("colors");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const usersModel = require("../models/userModel");
const asyncHandler = require("../middleware/asyncHandler");
const MyError = require("../utils/myError");
const sendEmail = require("../utils/email");

exports.checkCookie = asyncHandler(async (req, res, next) => {
  const token = req?.headers?.token;

  if (!token) {
    throw new MyError("токен байхгүй байна", 400);
  }

  const data = await jwt.decode(token, process.env.ACCESS_TOKEN);

  res.status(200).json({
    isDone: true,
    data,
    message: "амжилттай хэрэглэгчийн мэдээлэл авлаа",
  });
});

exports.getUserById = asyncHandler(async (req, res, next) => {
  const user = await usersModel.findById(req.params.id).populate("histories");

  res.status(200).json({
    isDone: true,
    data: user,
    message: "амжилттай хэрэглэгчийн мэдээлэл авлаа",
  });
});

exports.getUsers = asyncHandler(async (req, res, next) => {
  const users = await usersModel.find().populate("histories");

  res.status(200).json({
    isDone: true,
    data: users,
    message: "амжилттай хэрэглэгчийн мэдээлэл авлаа",
  });
});

exports.register = asyncHandler(async (req, res, next) => {
  const user = await usersModel.create(req.body);

  const token = user.getJWT();

  res.status(200).json({
    isDone: true,
    token,
    data: user,
    message: "амжилттай бүртгүүллээ",
  });
});

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new MyError("и-мэйл болон нууц үгээ дамжуулна уу", 400);
  }

  const user = await usersModel.findOne({ email: email }).select("+password");

  if (!user) {
    throw new MyError("ийм и-мэйл болон нууц алдаатай байна", 400);
  }

  const match = await user.checkPassword(password);

  if (!match) {
    throw new MyError(`Password алдаатай байна`, 404);
  }

  const token = user.getJWT();

  res.status(200).json({
    isDone: true,
    token,
    data: user,
    message: "амжилттай нэвтэрлээ",
  });
});

exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await usersModel.findById(req.params.id);

  if (!user) {
    throw new MyError(`ID алдаатай байна`, 404);
  }

  if (req.userId !== user.id && req.role !== "admin") {
    throw new MyError("өөрийнхөө user-ийг л өөрчлөх боломжтой", 404);
  }

  if (req.body.name === user.name) {
    throw new MyError(`сольж байгаа талбар өөр байх ёстой`, 404);
  }

  for (let el in req.body) {
    user[el] = req.body[el];
  }

  user.save();

  res.status(200).json({
    isDone: true,
    data: user,
    message: "амжилттай шинчиллээ",
  });
});

exports.deleteUser = asyncHandler(async (req, res, next) => {
  const user = await usersModel.findById(req.params.id);

  if (!user) {
    throw new MyError(`ID алдаатай байна`, 404);
  }

  user.remove();

  res.status(200).json({
    isDone: true,
    data: user,
    message: "амжилттай устаглаа",
  });
});

exports.checkUser = asyncHandler(async (req, res, next) => {
  if (!req.params.id) {
    throw new MyError(
      `та нууц үгээ сэргээхийн тулд email хаягаа илгээх шаардлагатай`,
      404
    );
  }

  const user = await usersModel.findOne({
    email: req.params.id,
  });

  if (!user) {
    throw new MyError(`и-майл алдаатай байна`, 404);
  }

  const resetToken = user.generatePasswordChangeToken();

  await user.save({ validateBeforeSave: false });

  const link = `https://localhost:3000/changePassword/${resetToken}`;

  sendEmail({
    id: req.params.id,
    subject: "нууц үг өөрчлөх хүсэлт",
    message: `Сайн байна уу <br><br> Та нууц үгээ солих хүсэль гараглаа.<br>Нууц үгээ доорх линк нь дээр дарж солино уу.<br><br><a href="${link}">${link}</a><br><br>Өдөрийг сайхан өнгөрүүлээрэй.`,
  });

  res.status(200).json({
    isDone: true,
    resetToken,
    message: "Баталгаажуулах код илгээлээ",
  });
});

exports.updateUserPass = asyncHandler(async (req, res, next) => {
  if (!req.body.resetToken || !req.body.password) {
    throw new MyError(`Та токен болон нууц үгээ дамжуулна уу`, 404);
  }

  const encrypt = crypto
    .createHash("sha256")
    .update(req.body.resetToken)
    .digest("hex");

  const user = await usersModel.findOne({
    resetPasswordToken: encrypt,
    resetPasswordExpired: { $gt: Date.now() },
  });

  if (!user) {
    throw new MyError(`нууц үг сэргээх хугацаа дууссан байна`, 404);
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save({ validateBeforeSave: false });

  const token = user.getJWT();

  res.status(200).json({
    isDone: true,
    token,
    data: user,
    message: "амжилттай password солигдлоо",
  });
});
