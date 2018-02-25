const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  username: {
    type: String,
    required: [true, "Please enter your username"]
  },
  email: {
    type: String,
    required: [true, "Please enter your Email"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Please enter your password"]
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
