const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const colors = require("colors");
const nodemailer = require("nodemailer");

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

exports.getUserByEmail = asyncHandler(async (req, res, next) => {
  const user = await usersModel.find({
    email: req.params.id,
  });

  if (user.length === 0) {
    throw new MyError(`и-майл алдаатай байна`, 404);
  }

  res.status(200).json({
    isDone: true,
    data: user[0],
    message: "амжилттай хэрэглэгчийн мэдээлэл авлаа",
  });
});

exports.createUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await usersModel.create({
    email: email,
    password: hashedPassword,
  });

  res.status(200).json({
    isDone: true,
    data: newUser,
    message: "амжилттай бүртгүүллээ",
  });
});

const ACCESS_TOKEN_KEY = "secret123";

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await usersModel.findOne({ email: email });

  if (!user) {
    throw new MyError(`ийм Email-тэй хэрэглэгч алга байна`, 404);
  }

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
    message: "амжилттай нэвтэрлээ",
  });
});

exports.updateUserPass = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(password, salt);

  const updatedUser = await usersModel.findOneAndUpdate(
    { email: email },
    { password: hashedPassword },
    {
      runValidators: true,
    }
  );

  res.status(200).json({
    isDone: true,
    data: updatedUser,
    message: "амжилттай password солигдлоо",
  });
});

exports.updateUserName = asyncHandler(async (req, res, next) => {
  const updatedUser = await usersModel.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
    },
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

exports.verifyUser = (req, res, next) => {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let stringId = "";
  for (let i = 0; i < 5; i++) {
    stringId += characters.charAt(Math.floor(Math.random() * 62));
  }

  const main = async () => {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "jawkhlan626@gmail.com",
        pass: "hnyrapoofcuttlnf",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    let info = await transporter.sendMail({
      from: "jawkhlan626@gmail.com",
      to: req.body.email,
      subject: "Boginoo",
      text: "Vertification",
      html: `<b>code: ${stringId}</b><br>
      <a href="https://www.facebook.com/profile.php?id=100010820288664">onclick and follow me</a>
      `,
    });
  };

  main().catch(console.error);
  res.status(200).json({
    isDone: true,
    verifyCode: stringId,
    message: "амжилттай устаглаа",
  });
};
