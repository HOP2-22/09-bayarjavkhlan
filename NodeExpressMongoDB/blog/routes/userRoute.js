const express = require("express");

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/userController");

const usersRouter = express.Router();

usersRouter.route("/user/").get(getUsers).post(createUser);

usersRouter.route("/user/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = usersRouter;
