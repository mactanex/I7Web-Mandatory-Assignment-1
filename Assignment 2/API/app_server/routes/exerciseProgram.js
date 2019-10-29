"use strict"; //good practice

var express = require("express");
var router = express.Router();
let auth = require("connect-ensure-login");
const ctrlExerciseProgram = require("./../Controllers/exerciseProgramController");
// let authe = require("./../authentication/middleware");

/* GET home page. */
router.get(
  "/",
  // authe.authenticationMiddleware(),
  auth.ensureLoggedIn("/"),
  ctrlExerciseProgram.ExerciseProgramHomePage
);
router.post(
  "/newExercise",
  auth.ensureLoggedIn("/"),
  ctrlExerciseProgram.NewExercise
);

router.post(
  "/newExerciseProgram",
  auth.ensureLoggedIn("/"),
  ctrlExerciseProgram.NewExerciseProgram
);

router.get(
  "/specificExerciseProgram",
  auth.ensureLoggedIn("/"),
  ctrlExerciseProgram.ExerciseProgramSpecificPage
);

module.exports = router;
