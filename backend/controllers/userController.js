const User = require("../models/userModel");
const asyncWrapper = require("../middleware/asyncWrapper");
const CustomError = require("../errors/customError")

const getUser = asyncWrapper( async (req, res, next) => {
  const { name } = req.params;
  const user = await User.findOne({ username: name }).lean()
  if(!user){
    return next(new CustomError("Invalid username provided", 404))
  }
  // here send the FCM with that particular greeting message
  res.status(200).json({
    success: true,
    user,
  })
})

const addUser = asyncWrapper(async (req, res, next) => {
  const user = await User.create(req.body);
  res.status(200).json({
    success: true,
    data: user
  })
})

const deleteUser = asyncWrapper ( async (req, res, next) => {
  const { name } = req.params;
  const user = await User.deleteOne({
    name
  })
  if (user.deletedCount === 0) {
    return next(
      new CustomError("No User were deleted, specify the correct Username", 404)
    );
  }
  res.status(200).json({
    success: true,
    message: "User deleted successfully",
  });
})

const editUser = asyncWrapper( async (req, res, next) => {
  const { name } = req.params;
  const user = await User.findOneAndUpdate(
    {
      username: name,
    },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!user) {
    return next(new CustomError("User does not exist", 404));
  }
  res.status(200).json({
    success: true,
    message: user,
  });
})

module.exports = {
  getUser,
  addUser,
  deleteUser,
  editUser
}