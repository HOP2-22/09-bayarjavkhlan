const bcrypt = require("bcrypt");
const colors = require("colors");
const nodemailer = require("nodemailer");

const usersModel = require("../models/userModel");
const asyncHandler = require("../middleware/asyncHandler");
const MyError = require("../utils/myError");

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

exports.checkUser = asyncHandler(async (req, res, next) => {
  const id = await usersModel
    .findOne({
      email: req.params.id,
    })
    .select({ _id: 1 });

  if (id.length === 0) {
    throw new MyError(`и-майл алдаатай байна`, 404);
  }

  res.status(200).json({
    isDone: true,
    id,
  });
});

exports.register = asyncHandler(async (req, res, next) => {
  console.log(req.body);
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

exports.updateUserPass = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await usersModel.findOneAndUpdate(
    { email: email },
    { password: hashedPassword },
    {
      new: true,
      runValidators: true,
    }
  );

  console.log("user======>" + user);

  res.status(200).json({
    isDone: true,
    data: user,
    message: "амжилттай password солигдлоо",
  });
});

exports.updateUserName = asyncHandler(async (req, res, next) => {
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
  const user = await usersModel.findByIdAndDelete(req.params.id);

  if (!user) {
    throw new MyError(`ID алдаатай байна`, 404);
  }

  res.status(200).json({
    isDone: true,
    data: user,
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
