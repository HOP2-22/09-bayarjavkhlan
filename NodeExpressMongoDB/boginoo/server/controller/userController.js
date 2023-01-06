const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const usersModel = require("../models/userModel");
const asyncHandler = require("../middleware/asyncHandler");
const MyError = require("../utils/myError");

exports.getUsers = asyncHandler(async (req, res, next) => {
  const users = await usersModel.find();

  res.status(200).json({
    isDone: true,
    data: users,
    message: "амжилттай мэдээлэлүүдийг авлаа",
  });
});

exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await usersModel.find({
    email: req.params.id,
  });

  if (!user) {
    throw new MyError(`и-майл алдаатай байна`, 404);
  }

  res.status(200).json({
    isDone: true,
    data: user,
    message: "амжилттай нэвтэрлээ",
  });
});

exports.createUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(password, salt);

  const users = await usersModel.create({ email, password: hashedPassword });

  res.status(200).json({
    isDone: true,
    data: users,
    message: "амжилттай бүртгүүллээ",
  });
});

const ACCESS_TOKEN_KEY = "secret123";

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await usersModel.findOne({ email: email });

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw new MyError(`Password алдаатай байна`, 404);
  }

  const token = jwt.sign(
    {
      user: user.email,
    },
    ACCESS_TOKEN_KEY
  );

  res.status(200).json({
    isDone: true,
    token: token,
    message: "амжилттай бүртгүүллээ",
  });
});

exports.updateUser = asyncHandler(async (req, res, next) => {
  const updatedUser = await usersModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      runValidators: true,
    }
  );

  if (!updatedUser) {
    throw new MyError(`ID алдаатай байна`, 404);
  }

  res.status(200).json({
    isDone: true,
    data: updatedUser,
    message: "амжилттай шинчиллээ",
  });
});

exports.deleteUser = asyncHandler(async (req, res, next) => {
  const deletedUser = await usersModel.findByIdAndDelete(req.params.id);

  if (!deletedUser) {
    throw new MyError(`ID алдаатай байна`, 404);
  }

  res.status(200).json({
    isDone: true,
    data: deletedUser,
    message: "амжилттай устаглаа",
  });
});
