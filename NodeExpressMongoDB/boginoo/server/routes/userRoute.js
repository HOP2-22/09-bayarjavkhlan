const express = require("express");

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/userController");

const usersRouter = express.Router();

usersRouter.route("/").get(getUsers).post(createUser);

usersRouter.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = usersRouter;
