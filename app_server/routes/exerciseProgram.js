var express = require("express");
var router = express.Router();
let auth = require("connect-ensure-login");
const passport = require("passport");
const ctrlExerciseProgram = require("./../Controllers/exerciseProgramController");

const authe = require("./../authentication/middleware");

/* GET home page. */
router.get(
  "/",
  auth.ensureLoggedIn("/"),
  ctrlExerciseProgram.ExerciseProgramHomePage
);
router.post(
  "/new",
  auth.ensureLoggedIn("/"),
  ctrlExerciseProgram.NewExerciseProgram
);

router.get(
  "/newExerciseProgram",
  auth.ensureLoggedIn("/"),
  ctrlExerciseProgram.ExerciseProgramNewPage
);
router.get(
  "/specificExerciseProgram",
  auth.ensureLoggedIn("/"),
  ctrlExerciseProgram.ExerciseProgramSpecificPage
);

module.exports = router;
