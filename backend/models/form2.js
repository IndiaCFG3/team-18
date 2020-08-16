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
  vehicle_number:{
    type: String,
    required: true,
    minlength:10,
    maxlength:10,
  },
  trips:{
    type: Integer,
    required: true,
  },
  bags:{
    type: Integer,
    required: true,
  },
  comments:{
    type: String,
    required: true,
    minlength: 0,
    maxlength: 100,
  },
});
