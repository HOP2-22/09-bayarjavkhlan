const express = require("express");

const {
  getUsers,
  createUser,
  updateUserName,
  updateUserPass,
  deleteUser,
  login,
  getUserByEmail,
  verifyUser,
} = require("../controller/userController");

const usersRouter = express.Router();

usersRouter.route("/checkEmail/:id").get(getUserByEmail);

usersRouter.route("/createUser").post(createUser);
usersRouter.route("/login").post(login);
usersRouter.route("/verify").post(verifyUser);

usersRouter.route("/changePass").put(updateUserPass);
usersRouter.route("/:id").put(updateUserName).delete(deleteUser);

module.exports = usersRouter;
