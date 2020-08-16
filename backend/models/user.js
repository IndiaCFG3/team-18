// We will define our user collection here.
var mongoose = require("mongoose");
var passportLocalMongoose  = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  // password: {
  //   type: String,
  //   required: true,
  //   minlength: 5,
  //   maxlength: 10,
  // },
  password : String,
  isAdmin: Boolean,
  isUser: Boolean,
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);