var express = require('express');
var router = express.Router();

const ctrlExerciseProgram = require('./../Controllers/exerciseProgramController');


/* GET home page. */
router.get('/', ctrlExerciseProgram.ExerciseProgramHomePage);
router.post('/new', ctrlExerciseProgram.NewExerciseProgram);

router.get('/newExerciseProgram', ctrlExerciseProgram.ExerciseProgramNewPage);
router.get('/specificExerciseProgram', ctrlExerciseProgram.ExerciseProgramSpecificPage);



module.exports = router;