const express = require("express");

const {
  getSubscribes,
  createSubscribe,
  deleteSubscribe,
} = require("../controller/subscribe");

const router = express.Router();

router
  .route("/")
  .get(getSubscribes)
  .post(createSubscribe)
  .delete(deleteSubscribe);

module.exports = router;
