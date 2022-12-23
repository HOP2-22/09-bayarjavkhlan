const usersModel = require("../models/userModel");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await usersModel.find();

    res.status(200).json({
      isDone: true,
      data: users,
      message: "amjilttai bvh user iin medeeleliig avlaa",
    });
  } catch (err) {
    res.status(404).json({
      isDone: false,
      error: err,
    });
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const users = await usersModel.findById(req.params.id);

    if (!users) {
      return res.status(404).json({
        isDone: false,
        message: `iim ${req.params.id}-tai user alga`,
      });
    }

    res.status(200).json({
      isDone: true,
      data: users,
      message: "amjilttai bvh user iin medeeleliig avlaa",
    });
  } catch (err) {
    res.status(404).json({
      isDone: false,
      error: err,
    });
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const users = await usersModel.create(req.body);

    res.status(200).json({
      isDone: true,
      data: users,
      message: "amjilttai user vvsgellee",
    });
  } catch (err) {
    res.status(404).json({
      isDone: false,
      error: err,
    });
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const users = await usersModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!users) {
      return res.status(404).json({
        isDone: false,
        message: `iim ${req.params.id}-tai user alga`,
      });
    }

    res.status(200).json({
      isDone: true,
      data: users,
      message: "amjilttai useriin medeeliig oorchilloo",
    });
  } catch (err) {
    res.status(404).json({
      isDone: false,
      error: err,
    });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const users = await usersModel.findByIdAndDelete(req.params.id);

    if (!users) {
      return res.status(404).json({
        isDone: false,
        message: `iim ${req.params.id}-tai user alga`,
      });
    }

    res.status(200).json({
      isDone: true,
      data: users,
      message: "amjilttai user ustaglaa",
    });
  } catch (err) {
    res.status(404).json({
      isDone: false,
      error: err,
    });
  }
};
