const express = require("express");

const {
  //bvh contact avdag
  getContacts,

  //contact bichdeg
  createContact,

  //contactiig ustagdag
  deleteContact,
} = require("../controller/contact");

const router = express.Router();

router.route("/").get(getContacts).post(createContact);
router.route("/:id/contact").delete(deleteContact);

module.exports = router;
