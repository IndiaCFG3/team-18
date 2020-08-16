var mongoose = require("mongoose");
var passportLocalMongoose  = require("passport-local-mongoose");

const form1Schema = new mongoose.Schema({
  surveyor_name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  project:{
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  date:{
    type: Date,
    required: true,
  },
  waste_in:{
    type: Number,
    required: true,
  },
  waste_out:{
    type: Number,
    required: true,
  },
  comments:{
    type: String,
    required: true,
    minlength: 0,
    maxlength: 100,
  },
});

module.exports = mongoose.model("Form1", form1Schema);