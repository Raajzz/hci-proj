const express = require("express")
const router = express.Router();

const {
  getUser,
  addUser,
  deleteUser,
  editUser
} = require("../controllers/userController");

router.route("/new").post(addUser);
router.route("/:name").get(getUser);
router.route("/delete/:name").delete(deleteUser);
router.route("/update/:name").patch(editUser);

module.exports = router;