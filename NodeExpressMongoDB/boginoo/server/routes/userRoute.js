const express = require("express");

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  login,
} = require("../controller/userController");

const usersRouter = express.Router();

usersRouter.route("/").get(getUsers).post(createUser);

usersRouter.route("/login").post(login);

usersRouter.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = usersRouter;
