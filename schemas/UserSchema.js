// Require mongoose

const mongoose = require('mongoose');

// Declare schema type

const Schema = mongoose.Schema;

// Create User Schema

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      // unique makes sure no other usernames can be the same
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      // unique makes sure no other usernames can be the same
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      required: true,
      // Create defualt profile pic
      default: 'imgages/profilePic.png',
    },
  },

  // Set Schema Time Stamp option
  { timestamps: true }
);

// export schema

let User = mongoose.model('User', UserSchema);
module.exports = User;
