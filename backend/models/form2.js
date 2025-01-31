var mongoose = require("mongoose");
var passportLocalMongoose  = require("passport-local-mongoose");

const form2Schema = new mongoose.Schema({
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
  vehicle_number:{
    type: String,
    required: true,
    minlength:10,
    maxlength:10,
  },
  trips:{
    type: Number,
    required: true,
  },
  bags:{
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

module.exports = mongoose.model("Form2", form2Schema);