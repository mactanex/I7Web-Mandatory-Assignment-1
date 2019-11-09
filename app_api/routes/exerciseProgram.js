"use strict"; //good practice

var express = require("express");
var router = express.Router();

var ctrlExerciseProgram = require("./../Controllers/exerciseProgramController");
var ctrlExercise = require("./../Controllers/exerciseController");
var ctrlActivity = require("./../Controllers/activityController");
const userMiddleware = require("../middleware/userMiddleware");

router
  .route("/exerciseprogram")
  .get(ctrlExerciseProgram.GetAll)
  .post(userMiddleware, ctrlExerciseProgram.Post);

router
  .route("/exerciseprogram/:exerciseprogramid")
  .get(userMiddleware, ctrlExerciseProgram.Get)
  .delete(userMiddleware, ctrlExerciseProgram.Delete)
  .put(userMiddleware, ctrlExerciseProgram.Put)


router
  .route("/exerciseprogram/:exerciseprogramid/exercise")
  .get(ctrlExercise.GetAll)
  .post(userMiddleware, ctrlExercise.Post);

router
  .route("/exerciseprogram/:exerciseprogramid/exercise/:exerciseid")
  .get(userMiddleware, ctrlExercise.Get)
  .delete(userMiddleware, ctrlExercise.Delete)
  .put(userMiddleware, ctrlExercise.Put)

router
  .route("/exerciseprogram/:exerciseprogramid/exercise/:exerciseid/activity")
  .get(ctrlActivity.GetAll)
  .post(userMiddleware, ctrlActivity.Post);

router
  .route("/exerciseprogram/:exerciseprogramid/exercise/:exerciseid/activity/:activityid")
  .get(userMiddleware, ctrlActivity.Get)
  .delete(userMiddleware, ctrlActivity.Delete)
  .put(userMiddleware, ctrlActivity.Put);


module.exports = router;