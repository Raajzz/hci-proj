const express = require("express")
const router = express.Router();

const {
  getUser,
  addUser,
  deleteUser,
  editUser
} = require("../controllers/userController");

router.route("/new").post(addUser);
router.route("/:id").get(getUser);
router.route("/delete/:id").delete(deleteUser);
router.route("/update/:id").patch(editUser);

module.exports = router;