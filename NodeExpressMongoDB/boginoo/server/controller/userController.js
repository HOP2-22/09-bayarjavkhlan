const usersModel = require("../models/userModel");
const asyncHandler = require("../middleware/asyncHandler");

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
  const users = await usersModel.create(req.body);

  res.status(200).json({
    isDone: true,
    data: users,
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
