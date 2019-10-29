"use strict"; //good practice

var exerciseProgramSchema = require("./../Models/exerciseProgramSchema");
var accountSchema = require("./../Models/accountSchema");
var jwt = require("jsonwebtoken");


module.exports.GetAllExercisePrograms = (req, res, next) => {
  let allUsers = [];
  let allPrograms = [];
  accountSchema.User.find({}, (err, users) => {
    if (err) {
      console.log(err)
    } else {
      users.forEach((user) => {
        users[user._id] = user;
      });
      // console.log(users);
      users.forEach((user) => {
        user.exercisePrograms.forEach(ep => allPrograms.push(ep));
        console.log(allPrograms);
        res.status(200);
        res.json({
          allPrograms
        });

      });
    }
  });
}

module.exports.Delete = (req, res, next) => {
  res.status(200);
  res.json({
    message: "success"
  });
}

module.exports.Put = (req, res, next) => {
  res.status(200);
  res.json({
    message: "success"
  });
}

module.exports.Get = (req, res, next) => {
  res.status(200);
  res.json({
    message: "success"
  });
}

// module.exports.NewExerciseProgram = (req, res, next) => {

//   let exerciseProgram = {
//     name: req.body.name
//   };

//   const user = req.user;
//   res.status(200);
// };

module.exports.NewExerciseProgram = (req, res, next) => {
  let exerciseProgram = {
    name: req.body.name,
    exerciseProgram: []
  };
  req.user.exercisePrograms.push(exerciseProgram);
  req.user.save(function (err) {
    if (err) {
      res.status(400);
      res.json({
        message: "error: " + err
      });
    } else {
      res.status(200);
      res.json({
        message: "success"
      });
    }
  });

};