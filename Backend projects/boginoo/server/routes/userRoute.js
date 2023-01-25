const express = require("express");

const {
  register,
  login,
  checkUser,
  getUsers,
  getUserById,
  updateUserName,
  updateUserPass,
  deleteUser,
  verifyUser,
} = require("../controller/userController");

const { protect, authorize } = require("../middleWare/protect");

const usersRouter = express.Router();

usersRouter.route("/").get(protect, authorize("admin"), getUsers);
usersRouter.route("/checkEmail/:id").get(checkUser);

usersRouter.route("/register").post(register);
usersRouter.route("/login").post(login);
usersRouter.route("/verify").post(verifyUser);

usersRouter.route("/changePass").put(updateUserPass);
usersRouter
  .route("/:id")
  .get(protect, getUserById)
  .put(protect, updateUserName)
  .delete(protect, authorize("admin"), deleteUser);

module.exports = usersRouter;
