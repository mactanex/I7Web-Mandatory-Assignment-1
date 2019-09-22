"use strict"; //good practice

var exerciseProgramSchema = require("./../Models/exerciseProgramSchema");
var accountSchema = require("./../Models/accountSchema");

var currentExerciseProgramTitle = "";

module.exports.ExerciseProgramHomePage = (req, res, next) => {
  res.render("ExerciseProgramHome", { user: req.user });
};

module.exports.ExerciseProgramSpecificPage = (req, res, next) => {
  var index = req.user.exercisePrograms.findIndex(
    x => x.name == req.param("title")
  );
  if (index > -1) {
    currentExerciseProgramTitle = req.param("title");
    const exProgram = req.user.exercisePrograms[index];

    res.render("ExerciseProgramSpecific", {
      title: currentExerciseProgramTitle,
      list: exProgram.exerciseProgram
    });
  } else {
    res.render("error", {
      message: "index not found",
      error: { status: 404, stack: "ExerciseProgramSpecificPage" }
    });
  }
};

module.exports.NewExercise = (req, res, next) => {
  let exercise = {
    name: req.body.name,
    description: req.body.description,
    set: req.body.set,
    repsOrTime: req.body.repsOrTime
  };

  //find index
  var index = req.user.exercisePrograms.findIndex(
    x => x.name == currentExerciseProgramTitle
  );
  const exProgram = req.user.exercisePrograms[index];
  if (index > -1) {
    req.user.exercisePrograms.splice(index, 1);
  }

  exProgram.exerciseProgram.push(exercise);
  //change new to add newly create exercise
  req.user.exercisePrograms.push(exProgram);
  // save in db.
  req.user.save();
  res.render("ExerciseProgramNew", {
    title: currentExerciseProgramTitle,
    list: exProgram.exerciseProgram
  });
  res.end();
};

module.exports.NewExerciseProgram = (req, res, next) => {
  let exerciseProgram = { name: req.body.name, exerciseProgram: [] };
  currentExerciseProgramTitle = exerciseProgram.name;
  req.user.exercisePrograms.push(exerciseProgram);
  req.user.save();
  res.render("ExerciseProgramNew", {
    title: req.body.name,
    list: exerciseProgram.exerciseProgram
  });
  res.end();
};
