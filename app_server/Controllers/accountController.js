var express = require("express");
var mongoose = require("mongoose");
var accountSchema = require("./../Models/accountSchema");
var passport = require("passport");
require("passport-local");

module.exports.loginPage = (req, res, next) => {
  res.render("index", { title: "Mandatory Assignment 1 - Exercise Manager" });
};

module.exports.login = (req, res, next) => {
  const userInstance = accountSchema.User.findOne(
    { username: req.body.username },
    function(err, user) {
      if (err) res.redirect("/");
      if (user.validPassword(req.body.password)) {
        passport.authenticate("local", {
          successReturnToOrRedirect: "/exerciseProgram",
          failureRedirect: "/"
        });
        res.redirect("/exerciseProgram");
      } else {
        res.redirect("/");
      }
    }
  );
};

module.exports.signupPage = (req, res, next) => {
  res.render("sign-up", {});
};

module.exports.signup = (req, res, next) => {
  const userInstance = new accountSchema.User({ username: req.body.username });
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
