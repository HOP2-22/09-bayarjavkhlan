const usersModel = require("../models/userModel");
const asyncHandler = require("../middleware/asyncHandler");

exports.getUsers = asyncHandler(async (req, res, next) => {
  const users = await usersModel.find();

  res.status(200).json({
    isDone: true,
    data: users,
    message: "amjilttai bvh user iin medeeleliig avlaa",
  });
});

exports.getUser = asyncHandler(async (req, res, next) => {
  const users = await usersModel.findById(req.params.id);

  if (!users) {
    throw new MyError(`iim ${req.params.id}-tai user alga`, 404);
  }

  res.status(200).json({
    isDone: true,
    data: users,
    message: "amjilttai bvh user iin medeeleliig avlaa",
  });
});

exports.createUser = asyncHandler(async (req, res, next) => {
  const users = await usersModel.create(req.body);

  res.status(200).json({
    isDone: true,
    data: users,
    message: "amjilttai user vvsgellee",
  });
});

exports.updateUser = asyncHandler(async (req, res, next) => {
  const users = await usersModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!users) {
    throw new MyError(`iim ${req.params.id}-tai user alga`, 404);
  }

  res.status(200).json({
    isDone: true,
    data: users,
    message: "amjilttai useriin medeeliig oorchilloo",
  });
});

exports.deleteUser = asyncHandler(async (req, res, next) => {
  const users = await usersModel.findByIdAndDelete(req.params.id);

  if (!users) {
    throw new MyError(`iim ${req.params.id}-tai user alga`, 404);
  }

  res.status(200).json({
    isDone: true,
    data: users,
    message: "amjilttai user ustaglaa",
  });
});
