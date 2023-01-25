const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const usersSchema = mongoose.Schema(
  {
    name: {
      type: String,
      maxLength: [50, "нэр дээд талдаа 50 тэмдэгтэнд багтаана уу"],
      minLength: [2, "нэр доод талдаа 2 тэмдэгтэнд багтаана уу"],
      default: "user",
    },
    email: {
      type: String,
      required: [true, "хэрэглэгчийн и-мэйл хаягийг оруулж өгнө үү"],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "и-мэйл хаяг оруулнуу",
      ],
    },
    password: {
      type: String,
      min: [4, "пассвортны урт доод талдаа 4 тэмдэгтэй байх ёстой"],
      required: [true, "пасс аа оруулна уу"],
      select: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createdAt: { type: Date, default: Date.now },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

usersSchema.virtual("histories", {
  ref: "histories",
  localField: "_id",
  foreignField: "user",
  justOne: false,
});

usersSchema.pre("remove", async function (next) {
  await this.model("histories").deleteMany({ user: this._id });
  next();
});

usersSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

usersSchema.methods.getJWT = function () {
  const token = jwt.sign(
    {
      id: this._id,
    },
    process.env.ACCESS_TOKEN,
    {
      expiresIn: process.env.JWT_EXPIRESIN,
    }
  );

  return token;
};

usersSchema.methods.checkPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const users = mongoose.model("users", usersSchema);

module.exports = users;
