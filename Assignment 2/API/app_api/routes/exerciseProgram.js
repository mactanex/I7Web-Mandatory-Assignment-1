"use strict"; //good practice

var express = require("express");
var router = express.Router();
var jwt = require("express-jwt");
var auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: "payload"
});
var ctrlExerciseProgram = require("./../Controllers/exerciseProgramController");
var ctrlExercise = require("./../Controllers/exerciseController");
// let authe = require("./../authentication/middleware");
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

// router
//   .route("/exerciseprogram/:exerciseprogramid/exercise/:exerciseid/activity")
// .get(ctrlExerciseProgram.GetAllExercises)
// .post(auth, ctrlExerciseProgram.NewExercise);

// router
//   .route("/exerciseprogram/:exerciseprogramid/exercise/:exerciseid/activity/:activityid")
// .get(auth, ctrlExerciseProgram.NewExercise)
// .delete(auth, ctrlExerciseProgram.Delete)
// .put(auth, ctrlExerciseProgram.Put)


// router.post(
//   "/newExercise",
//   auth,
//   ctrlExerciseProgram.NewExercise
// );

// router.post(
//   "/newExerciseProgram",
//   auth,
//   ctrlExerciseProgram.NewExerciseProgram
// );


module.exports = router;