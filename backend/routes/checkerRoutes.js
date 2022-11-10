const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  checkUser
} = require("../controllers/checkerController")

router.route("/:name").post(checkUser);
router.route("/get-all").get(getAllUsers);

module.exports = router;