const express = require("express");
const config = require("config");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");

const app = express();
//require("./startup/routes")(app);

app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//views folder
app.use(express.static("public"));
app.use(methodOverride("_method")); // to deal with put requests ( while updating forms )

// models to use it further
var Form1 = require("./models/form1");
var Form2 = require("./models/form2");
var User = require("./models/user");

var form1Routes = require("./routes/form1")
var form2Routes = require("./routes/form2")

app.use(form1Routes);
app.use(form2Routes);


mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.77obl.mongodb.net/Carpe?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(require("express-session")({
	secret: "Gonna get restored !!",
	resave: false,
	saveUninitialized : false
}));
	
// User.create({
//   name : "Sample" ,
//   email :  "Sample@gmail.com" ,
//   password : "test18" ,
//   isAdmin : true ,
//   isUser : false
// } , function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("User Created");
//   }
// })
mongoose.set("useCreateIndex", true);

app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

//routes
app.get("/", function (req, res) {
  res.render("home");
});

app.get("/login", function (req, res) {
  res.render("login");
});

// app.post("/login", function (req, res) {
//   const user = new User({
//     username: req.body.username,
//     password: req.body.password,
//   });

//   req.login(user, function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       passport.authenticate("local")(req, res, function () {
//         res.redirect("/secrets");
//       });
//     }
//   });
// });

app.post("/login", passport.authenticate("local", 
		{
			successRedirect: "/secrets",
			failureRedirect: "/login"
		}), function(req, res){
});

app.get("/register", function (req, res) {
  res.render("register");
});

app.post("/register", function (req, res) {
  console.log(req.body.username, req.body.email, req.body.password, req.body, typeof(req.body.username));
  User.register({username: req.body.username, email: req.body.email, isAdmin: false, isUser: false}, req.body.password, function (err, user) {
      if (err) {
        console.log(err);
        res.redirect("/");
      } else {
        console.log(user);
        passport.authenticate("local")(req, res, function () {
          res.redirect("/secrets");
        });
      }
    }
  );
});

// router.post("/register", function(req, res){
//   var newUser = new User({username: req.body.name});
//   User.register(newUser, req.body.password, function(err, user){
//     if(err){
//         req.flash("error", err.message);
//       return res.redirect("/register");
//     }
//     passport.authenticate("local")(req, res ,function(){
//       req.flash("sucess", "Welcome to YelpCamp " + user.username);
//       res.redirect("/campgrounds");
//     });
//   });
// });

app.get("/dashboard", isLoggedIn, function(req, res){
  res.render('dashboard');
})

app.get('/dashboard/form1-display', isLoggedIn, function(req, res){
  res.render('form1-display');
})

app.get('/dashboard/form2-display', isLoggedIn, function(req, res){
  res.render('form2-display');
})

const port = process.env.PORT || config.get("port");
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);

// Form1.find({}, function(err, forms){
//   if (err)
//     console.log(err);
//   else
//     console.log(forms);
// })

function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	//req.flash("error", "You need to be logged in to do that !")
	res.redirect("/login");
}

module.exports = server;
