const express = require("express");

const {
  getUsers,
  createUser,
  updateUserName,
  updateUserPass,
  deleteUser,
  login,
  getUserByEmail,
} = require("../controller/userController");

const usersRouter = express.Router();

usersRouter.route("/").get(getUsers);
usersRouter.route("/checkEmail/:id").get(getUserByEmail);
usersRouter.route("/changePass").put(updateUserPass);
usersRouter.route("/createUser").post(createUser);
usersRouter.route("/login").post(login);
usersRouter.route("/:id").put(updateUserName).delete(deleteUser);

module.exports = usersRouter;
