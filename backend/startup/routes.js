const express = require("express");
const about = require("../routes/about");
const contact = require("../routes/about");
const user = require("../routes/user");
const dashboard = require("../routes/dashboard");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/about", about);
  app.use("/api/contact", contact);

  // Note that here we have just added user route. When we reach this route we will
  // further process according to our isAdmin bool value which we will use to send the user to dashboard
  // The dashboard will load data according to the user privileges accordingly.
  app.use("/api/user", user);
};
