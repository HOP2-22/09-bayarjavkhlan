const express = require("express");

const {
  getShortById,
  getShortsByUser,
  createShort,
  updateShort,
  deleteShort,
  getShorts,
} = require("../controller/shortController");

const usersRouter = express.Router();

usersRouter.route("/allShorts").get(getShorts);
usersRouter.route("/").post(createShort);
usersRouter.route("/:id").get(getShortById);
usersRouter.route("/home").post(createShort);
usersRouter
  .route("/home/:id")
  .get(getShortsByUser)
  .put(updateShort)
  .delete(deleteShort);

module.exports = usersRouter;
