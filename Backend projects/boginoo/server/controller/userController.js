const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const colors = require("colors");
const nodemailer = require("nodemailer");

const usersModel = require("../models/userModel");
const asyncHandler = require("../middleware/asyncHandler");
const MyError = require("../utils/myError");

exports.getUserById = asyncHandler(async (req, res, next) => {
  const user = await usersModel.findById(req.userId).populate("histories");

  if (user.length === 0) {
    throw new MyError(`и-майл алдаатай байна`, 404);
  }

  res.status(200).json({
    isDone: true,
    user: user,
    data: user[0],
    message: "амжилттай хэрэглэгчийн мэдээлэл авлаа",
  });
});

exports.getUserByEmail = asyncHandler(async (req, res, next) => {
  const user = await usersModel.findOne({
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
  console.log(req.body);
  const newUser = await usersModel.create(req.body);

  res.status(200).json({
    isDone: true,
    data: newUser,
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

let verifyCount = 0;
exports.verifyUser = async (req, res, next) => {
  console.log("asdf");
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let stringId = "";
  for (let i = 0; i < 5; i++) {
    stringId += characters.charAt(Math.floor(Math.random() * 62));
  }
  console.log(stringId);

  const main = async () => {
    let transporter = nodemailer.createTransport({
      host: "",
      port: 587,
      secure: false,
      auth: {
        // user: "jawkhlan626@gmail.com",
        // pass: "yrzswrigcwgattyy",
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
  verifyCount = verifyCount++;

  main().catch(console.error);
  res.status(200).json({
    isDone: true,
    verifyCode: stringId,
    message: "амжилттай устаглаа",
  });
};

setTimeout(() => {
  console.log(`өнөөдөр nodeMailer руу ${verifyCount} удаа хандлаа`);
  verifyCount = 0;
}, [24 * 3600]);
