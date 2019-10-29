"use strict"; //good practice

var accountSchema = require("./../Models/accountSchema");

module.exports.login = (req, res, next) => {
  accountSchema.User.findOne({ username: req.body.username }, function (
    err,
    user
  ) {
    if (err) {
      res.status(400);
      res.json({ message: "error: " + err });
    } else {
      res.status(200);
      res.json({ token: user.generateJwt() });
    }
  });
};

module.exports.signup = (req, res, next) => {
  const userInstance = new accountSchema.User({
    username: req.body.username
  });
  userInstance.setPassword(req.body.password);
  userInstance.save(function (err) {
    if (err) {
      res.status(400);
      res.json({ message: "error" + err });
    } else {
      res.status(200);
      res.json({ message: "success" });
    }
  });
};

module.exports.logout = (req, res, next) => {
  req.logout();
  res.status(200);
  res.json({ message: "success" });
};