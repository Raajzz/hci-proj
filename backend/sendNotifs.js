const express = require("express");
const { admin } = require("./config/firebaseConfig");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = 3000;
const notification_options = {
  priority: "high",
  timeToLive: 60 * 60 * 24,
};
app.post("/firebase/notification", (req, res) => {
  const registrationToken = req.body.registrationToken;
  const message = req.body.message;
  const options = notification_options;

  admin
    .messaging()
    .sendToDevice(registrationToken, message, notification_options)
    .then((response) => {
      res.status(200).send("Notification sent successfully");
    })
    .catch((error) => {
      console.log(error);
    });
});
app.listen(port, () => {
  console.log("listening to port" + port);
});
