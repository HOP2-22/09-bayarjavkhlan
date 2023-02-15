const paginate = require("../utils/paginate");

const User = require("../models/User");

exports.ExampleCode = async (req, res, next) => {
  const Example = {};
  try {
    const example = await Example.find({});

    res.status(200).json({
      success: true,
      data: example,
      message: "жишээ api function иймэрхүү маягаар code oo бичнэ",
    });
  } catch (error) {
    //Хэрэв алдаа гарвал error middle ware ажилна
    //Хаана байгаа ../middleware/error.js
    next(error);
  }
};

//Admin

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});

    res.status(200).json({
      success: true,
      data: users,
      message: "амжилттай хэрэглэгчдийн мэдээлэлийг авлаа",
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

//User

exports.getUser = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

//Auth

exports.register = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

exports.updatePass = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

exports.verifyUser = (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
