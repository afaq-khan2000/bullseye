const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
   firstName: {
      type: String,
      required: false,
      trim: true,
      minlength: 3,
    },
    lastName: {
      type: String,
      required: false,
      trim: true,
      minlength: 3,
    },
    profilePic: {
      type: String,
      required: false,
      trim: true,
      minlength: 3,
    },
    prefferedLanguage: {
      type: String,
      required: false,
      trim: true,
      minlength: 3,
      default: "english",
    },
    gender: {
      type: String,
      required: false,
      trim: true,
      minlength: 3,
    },
    dob: {
      type: Date,
      required: false,
    },
    phone: {
      type: String,
      required: false,
      trim: true,
      minlength: 3,
    },
    address: {
      type: String,
      required: false,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ["advisor", "investor", "admin"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
