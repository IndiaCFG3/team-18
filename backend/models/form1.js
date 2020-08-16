const form1Schema = new mongoose.Schema({
  surveyor_name: {
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
    type: Integer,
    required: true,
  },
  waste_out:{
    type: Integer,
    required: true,
  },
  project:{
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
});
