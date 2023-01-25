const express = require("express");

const {
  getAllShort,
  getOrignalByShort,
  createShort,
  deleteShort,
} = require("../controller/shortController");

const { protect, authorize } = require("../middleWare/protect");

const usersRouter = express.Router();

usersRouter
  .route("/")
  .get(protect, authorize("admin"), getAllShort)
  .post(createShort);
usersRouter.route("/:id").get(getOrignalByShort).delete(protect, deleteShort);

module.exports = usersRouter;
