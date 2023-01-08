const express = require("express");

const {
  getOrignalByShort,
  getShortsByUser,
  createShort,
  updateShort,
  deleteShort,
  getShorts,
} = require("../controller/shortController");

const usersRouter = express.Router();

usersRouter.route("/allShorts").get(getShorts);
usersRouter.route("/").post(createShort);
usersRouter.route("/:id").get(getOrignalByShort);

usersRouter
  .route("/home/:id")
  .get(getShortsByUser)
  .put(updateShort)
  .delete(deleteShort);

module.exports = usersRouter;
