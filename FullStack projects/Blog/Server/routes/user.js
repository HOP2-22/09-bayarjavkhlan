const express = require("express");

const {
  getUsers,
  deleteUser,
  getUser,
  updateUser,
  register,
  login,
  updatePass,
  verifyUser,
  forgotPassword,
} = require("../controller/user");

const router = express.Router();

router.route("/").get(getUsers);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

router.route("/auth/signup").post(register);
router.route("/auth/login").post(login);
router.route("/auth/updatePassword").post(updatePass);
router.route("/auth/verify").post(verifyUser);
router.route("/auth/forgotPassword").post(forgotPassword);

module.exports = router;
