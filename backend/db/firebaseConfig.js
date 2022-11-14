const admin = require("firebase-admin");
require('dotenv').config();
//const serviceAccount = require("./hci-proj-690e8-firebase-adminsdk-drbph-014900c5a1.json");

admin.initializeApp({
  //credential: admin.credential.cert(serviceAccount),
  projectId:process.env.FIREBASE_PROJECT_ID,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  privateKey:process.env.FIREBASE_PRIVATE_KEY,
  clientEmail:process.env.FIREBASE_CLIENT_EMAIL
});

module.exports.admin = admin;
