const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is a required field"],
      trim: true,
      maxlength: [
        30,
        "Length of the First Name must be less than 30 characters long",
      ],
      minlength: [
        1,
        "Length of the First Name must be at least a character long",
      ],
    },
    secondName: {
      type: String,
      trim: true,
      maxlength: [
        30,
        "Length of the Second Name must be less than 30 characters long",
      ],
      minlength: [
        1,
        "Length of the Second Name must be at least a character long",
      ],
    },
    userName: {
      type: String,
      required: [true, "User Name is a required field"],
      trim: true,
      maxlength: [
        20,
        "Length of the User Name must be less than 30 characters long",
      ],
      minlength: [
        3,
        "Length of the User Name must be at least 3 character long",
      ],
      //unique: true,
    },
    age: {
      type: Number,
      max: [100, "Value of age must be lesser than 100"],
    },
    group: {
      type: String,
    },
    greetingMessage: {
      type: String,
      maxlength: [
        500,
        "Length of the greetingMessage field must be lesser than 500 characters",
      ],
      minlength: [
        1,
        "Length of the greetingMessage field must be greater than atleast a character",
      ],
    },
  },
  {
    strictQuery: false
  }
);

module.exports = mongoose.model("User", UserSchema);