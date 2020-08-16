const mongoose = require("mongoose");
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const config = require("config");
//
// const db = config.get("db");
// console.log(db);

app.use(session({
    secret: 'Our Little Secret',
    resave: false,
    saveUninitialized: false
  }));

  app.use(passport.initialize());
  app.use(passport.session());
  mongoose.connect("mongodb://localhost/users" , {useNewUrlParser : true ,useUnifiedTopology: true});
  mongoose.set('useCreateIndex' , true);
