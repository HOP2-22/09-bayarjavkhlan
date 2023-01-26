const express = require("express");

const {
  register,
  login,
  checkUser,
  getUsers,
  getUserById,
  updateUser,
  updateUserPass,
  deleteUser,
} = require("../controller/userController");

const { protect, authorize } = require("../middleWare/protect");

const usersRouter = express.Router();

usersRouter.route("/").get(protect, authorize("admin"), getUsers);
usersRouter.route("/checkEmail/:id").post(checkUser);

usersRouter.route("/register").post(register);
usersRouter.route("/login").post(login);

usersRouter.route("/changePass").put(updateUserPass);
usersRouter
  .route("/:id")
  .get(protect, getUserById)
  .put(protect, updateUser)
  .delete(protect, authorize("admin"), deleteUser);

module.exports = usersRouter;
