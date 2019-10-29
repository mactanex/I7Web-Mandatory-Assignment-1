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
        user.exercisePrograms.forEach(ep => {
          console.log(ep._id);
          allPrograms.push(ep)
        });
      });
      res.status(200);
      res.json({
        allPrograms
      });
    }
  });
}

module.exports.Delete = (req, res, next) => {
  const exerciseProgramId = req.params.exerciseProgramId;

  req.user.exercisePrograms.splice(exerciseProgramId, 1)
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


}

module.exports.Put = (req, res, next) => {
  const exerciseProgramId = req.params.exerciseProgramId;
  const exerciseProgramToUpdate = req.user.exercisePrograms.find(function (ex) {
    return ex._id = exerciseProgramId;
  });
  exerciseProgramToUpdate.name = req.body.name;
  req.user.exercisePrograms.id(exerciseProgramId) = exerciseProgramToUpdate;

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

}

module.exports.Get = (req, res, next) => {
  const exerciseProgramId = req.params.exerciseProgramId;
  const exerciseProgram = req.user.exercisePrograms.find(function (ex) {
    return ex._id = exerciseProgramId;
  });
  if (!exerciseProgram) {
    res.status(200);
    res.json({
      message: exerciseProgram
    });
  } else {
    res.status(400);
    res.json({
      message: "exercise program does not exist"
    });
  }
}


module.exports.NewExerciseProgram = (req, res, next) => {
  console.log("this is not right");
  const exerciseProgram = new exerciseProgramSchema.exerciseProgram({
    name: req.body.name
  })
  console.log("uis");
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