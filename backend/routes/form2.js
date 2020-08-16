var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

router.get("/form2", function (req, res) {
    res.render("form2");
  });
  
  router.post("/form2", function (req, res) {
    form = {surveyor_name: req.body.surveyorName, project: req.body.projectName,
        date: req.body.date,
        vehicle_number: req.body.vehicleNumber,
        trips: req.body.numberOfTrips,
        bags: req.body.numberOfBags,
        comments: req.body.comment};
    Form2.create(form, function(err, form2){
        if(err){
        console.log(err);
        }
        else{
            console.log("Successfully added data to db");
            //res.redirect("");
        }
        });
  });

  module.exports = router;