const express = require("express");

const {
  getLists,
  getList,
  createList,
  updateList,
  deleteList,
} = require("../controller/todoController");

const router = express.Router();

router.route("/").get(getLists).post(createList);

router.route("/:id").get(getList).put(updateList).delete(deleteList);

module.exports = router;