var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

router.get("/form1", function (req, res) {
    res.render("form1");
  });
  
router.post("/form1", function (req, res) {
    form = {surveyor_name: req.body.surveyorName, project: req.body.projectName,
        date: req.body.date,
        waste_in: req.body.incomingWastes,
        waste_out: req.body.outgoingWastes,
        comments: req.body.comment}
    Form1.create(form, function(err, form1){
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