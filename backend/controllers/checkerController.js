const User = require("../models/userModel");
const asyncWrapper = require("../middleware/asyncWrapper");
const CustomError = require("../errors/customError");

const getAllUsers = asyncWrapper (async (req, res, next) => {
  const user = await User.find({})
  res.json({
    success: true,
    data: user
  });
});

const checkUser = asyncWrapper ( async (req, res, next) => {
  const { name } = req.params;
  if(name === "new-comer"){
    // push notif that a new comer has arrived
    return res.status(200).json({
      success: true,
      message: "Push notification sent to the user"
    })
  } 
  const user = await User.findOne({
    userName: name
  })
  if(!user){
    return next(new CustomError("Invalid username provided", 404))
  }
  return res.status(200).json({
    success: true,
    user,
    message: "Push notification sent to the user"
  })
});


module.exports = {
  getAllUsers,
  checkUser,

};
