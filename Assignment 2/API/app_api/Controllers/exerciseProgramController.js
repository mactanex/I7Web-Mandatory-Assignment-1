"use strict"; //good practice

var exerciseProgramSchema = require("./../Models/exerciseProgramSchema");
var accountSchema = require("./../Models/accountSchema");


module.exports.NewExercise = (req, res, next) => {
  let exercise = {
    name: req.body.name,
    description: req.body.description,
    set: req.body.set,
    repsOrTime: req.body.repsOrTime,
  };

  const exerciseProgramId = req.params.exerciseprogramid;

  //find index
  var index = req.user.exercisePrograms.findIndex(
    x => x._id == exerciseProgramId
  );
  const exProgram = req.user.exercisePrograms[index];
  if (index > -1) {
    req.user.exercisePrograms.splice(index, 1);
  }

  exProgram.exerciseProgram.push(exercise);
  //change new to add newly create exercise
  req.user.exercisePrograms.push(exProgram);
  // save in db.
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

module.exports.NewExerciseProgram = (req, res, next) => {
  let exerciseProgram = {
    name: req.body.name,
    exerciseProgram: []
  };
  currentExerciseProgramTitle = exerciseProgram.name;
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