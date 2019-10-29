"use strict"; //good practice

module.exports.authenticationMiddleware = function authenticationMiddleware() {
  return function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/");
    }
  };
};