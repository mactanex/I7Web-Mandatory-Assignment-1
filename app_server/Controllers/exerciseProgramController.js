"use strict"; //good practice

var exerciseProgramSchema = require("./../Models/exerciseProgramSchema");

module.exports.ExerciseProgramHomePage = (req, res, next) => {
  res.render("ExerciseProgramHome", { user: req.user });
};

module.exports.ExerciseProgramNewPage = (req, res, next) => {
  res.render("ExerciseProgramNew", {});
};

module.exports.ExerciseProgramSpecificPage = (req, res, next) => {
  res.render("ExerciseProgramSpecific", {});
};

module.exports.NewExercise = (req, res, next) => {
  //res.render('index', { title: 'Mandatory Assignment 1 - Exercise Manager' });
  const exerciseInstance = new exerciseProgramSchema.exerciseSchema({});
  res.end();
};

module.exports.NewExerciseProgram = (req, res, next) => {
  //res.render('index', { title: 'Mandatory Assignment 1 - Exercise Manager' });
  const exerciseInstance = new exerciseProgramSchema.exerciseProgramSchema({});
  res.end();
};
