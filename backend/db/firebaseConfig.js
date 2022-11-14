const admin = require("firebase-admin");
require('dotenv').config();
//const serviceAccount = require("./hci-proj-690e8-firebase-adminsdk-drbph-014900c5a1.json");

admin.initializeApp({
  //credential: admin.credential.cert(serviceAccount),
  credential:admin.credential.cert( {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY
    ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/gm, "\n"):undefined,
    
  }),
  databaseURL:process.env.FIREBASE_DATABASE_URL,
});

module.exports.admin = admin;
