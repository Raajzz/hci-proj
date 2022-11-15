const { admin }=require( '../db/firebaseConfig');
const asyncWrapper = require("../middleware/asyncWrapper");

const sendNotification=asyncWrapper(async(req,res,next)=>{
    
    const { msg } = req.body;
    const registrationToken = 'fE7LiysiS5e7Xs4394DjnI:APA91bGVHDEAouLDsnoQ3XWlVJ9v3dzBiCYNL-Qu1l_MgJ8gzc07r21tEL6VXHn7heU5NfeV5VHYeCn5IbwWidbaSK6aaJT1Xf9TSoSjYPb0tdpEs6UWIR5cP1syK-kJM2Cyzab7iXyo';
  
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
  