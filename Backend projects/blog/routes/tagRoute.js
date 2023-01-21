const express = require("express");

const { getTags } = require("../controller/tagController");

const tagRouter = express.Router();

tagRouter.route("/tag").get(getTags);

module.exports = tagRouter;
