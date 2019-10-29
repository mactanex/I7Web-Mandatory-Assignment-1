"use strict"; //good practice

var express = require("express");
var router = express.Router();
var jwt = require("express-jwt");
var auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: "payload"
});
const ctrlExerciseProgram = require("./../Controllers/exerciseProgramController");
// let authe = require("./../authentication/middleware");

router.post(
  "/newExercise",
  auth,
  ctrlExerciseProgram.NewExercise
);

router.post(
  "/newExerciseProgram",
  auth,
  ctrlExerciseProgram.NewExerciseProgram
);


module.exports = router;
