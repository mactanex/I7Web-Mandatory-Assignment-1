"use strict"; //good practice

var exerciseProgramSchema = require("./../Models/exerciseProgramSchema");
var accountSchema = require("./../Models/accountSchema");

module.exports.ExerciseProgramHomePage = (req, res, next) => {
  res.render("ExerciseProgramHome", { user: req.user });
};

module.exports.ExerciseProgramSpecificPage = (req, res, next) => {
  res.render("ExerciseProgramSpecific", {});
};

module.exports.NewExercise = (req, res, next) => {
  //res.render('index', { title: 'Mandatory Assignment 1 - Exercise Manager' });
  console.log(req.user);
  let exercise = {};
  res.end();
};

module.exports.NewExerciseProgram = (req, res, next) => {
  //res.render('index', { title: 'Mandatory Assignment 1 - Exercise Manager' });
  let exerciseProgram = { name: req.body.name, exerciseProgram: [] };
  req.user.exercisePrograms.push(exerciseProgram);
  req.user.save();
  res.render("ExerciseProgramNew", { name: req.body.name });
  //res.redirect("/exerciseProgram/newExerciseProgram");
  res.end();
};
