module.exports.ExerciseProgramHomePage = (req, res, next) => {
    res.render('ExerciseProgramHomePage', {  });
  }

module.exports.ExerciseProgramNewPage = (req, res, next) => {
    res.render('ExerciseProgramNewPage', {  });
}


module.exports.ExerciseProgramSpecificPage = (req, res, next) => {
    res.render('ExerciseProgramSpecificPage', {});
}

module.exports.NewExerciseProgram = (req, res, next) => {
    //res.render('index', { title: 'Mandatory Assignment 1 - Exercise Manager' });
    res.end();
  }