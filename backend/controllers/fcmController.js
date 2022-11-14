const { admin }=require( '../db/firebaseConfig');
const asyncWrapper = require("../middleware/asyncWrapper");

const sendNotification=asyncWrapper(async(req,res,next)=>{
    
    const { msg } = req.body;
    const registrationToken = 'fvOzc-gaTIiNO9ZnDfcqii:APA91bFI8PIL-NlxAextmutZO-z24OuHngNs8Wx2eGTQ9ka9Py53qA1tVRk34Lft9XAt3Of9mrxf5eLbbNd9xOaSGl2bUedGlOBv4MtEpZOi6gplY26IzWfpS97BYbeb4iNdDpUGwL11';
  
  const message = {
    data: {
      score: '850',
      time: '2:45'
    },
    notification: {
      title: 'Person at door!',
      body: msg,
    },
    token: registrationToken
  };
  
  // Send a message to the device corresponding to the provided
  // registration token.
  
  admin.messaging().send(message)
    .then((response) => {
      // Response is a message ID string.
      console.log('Successfully sent message:', response);
      return res.status(200).json({
        success: true,
        message: "Push notification sent to the user"
      })
    })
    .catch((error) => {
      console.log('Error sending message:', error);
      return res.status(500).json({
        success: false,
        message: error
      })
    });
    
  });

  module.exports = {
   
    sendNotification,
  };
  