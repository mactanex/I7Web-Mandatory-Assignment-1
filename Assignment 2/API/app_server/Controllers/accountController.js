"use strict"; //good practice

var accountSchema = require("./../Models/accountSchema");
var passport = require("passport");

module.exports.loginPage = (req, res, next) => {
  res.render("index", {
    title: "Mandatory Assignment 1 - Exercise Manager",
    user: req.user
  });
};

module.exports.logout = (req, res, next) => {
  req.logout();
  req.session.destroy(function(err) {
    if (!err) {
      res
        .status(200)
        .clearCookie("connect.sid", { path: "/" })
        .json({ status: "Success" });
    } else {
      // handle error case...
    }
  });
  res.redirect("/");
};

module.exports.login = (req, res, next) => {
  passport.authenticate("local", {
    failureRedirect: "/",
    successRedirect: "/exerciseProgram"
  })(req, res, next);
};

module.exports.signupPage = (req, res, next) => {
  res.render("sign-up", { user: req.user });
};

module.exports.signup = (req, res, next) => {
  const userInstance = new accountSchema.User({
    username: req.body.username
  });
  userInstance.setPassword(req.body.password);
  userInstance.save(function(err) {
    if (err) {
      req.flash(
        "error",
        `Failed to create user account because: ${err.message}.`
      );
    } else {
      res.redirect("/");
    }
  });
};

module.exports.logout = (req, res, next) => {
  req.logout();
  res.redirect("/");
};
