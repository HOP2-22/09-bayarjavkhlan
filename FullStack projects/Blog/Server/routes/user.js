const express = require("express");

const {
  //Admin l bvh useriin medeeleliig avna
  getUsers,

  //Admin l user-iig ustagdag baina
  deleteUser,

  //Hereglegchiig oroh uyed hereglegchiin medeeleliig duudaj ogoh api
  getUser,

  //Hereglegch ooriinhoo medeeleliig solih uyed ashiglagdah api
  updateUser,

  //Hereglegchiin authentication
  //1.shineer bvrtgvvleh 2.nevtreh 3.Passwordoo solih 4.Hereglegchiig batatgah
  register,
  login,
  updatePass,
  verifyUser,
} = require("../controller/user");

const router = express.Router();

router.route("/admin/getUsers").get(getUsers);
router.route("/admin/deleteUser").delete(deleteUser);

router.route("/").get(getUser);
router.route("/:id").get(updateUser);

router.route("/auth/signup").post(register);
router.route("/auth/login").post(login);
router.route("/auth/updatePassword").post(updatePass);
router.route("/auth/verify").post(verifyUser);

module.exports = router;
