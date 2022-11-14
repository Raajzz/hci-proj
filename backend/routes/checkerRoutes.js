const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  checkUser
  
} = require("../controllers/checkerController")

const {sendNotification}=require("../controllers/fcmController");

router.route("/send-fcm").post(sendNotification);
router.route("/:name").post(checkUser);
router.route("/get-all").get(getAllUsers);


module.exports = router;