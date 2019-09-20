module.exports.ExerciseProgramHomePage = (req, res, next) => {
    res.render('ExerciseProgramHome', {  });
  }

module.exports.ExerciseProgramNewPage = (req, res, next) => {
    res.render('ExerciseProgramNew', {  });
}


module.exports.ExerciseProgramSpecificPage = (req, res, next) => {
    res.render('ExerciseProgramSpecific', {});
}

module.exports.NewExerciseProgram = (req, res, next) => {
    //res.render('index', { title: 'Mandatory Assignment 1 - Exercise Manager' });
    res.end();
  }