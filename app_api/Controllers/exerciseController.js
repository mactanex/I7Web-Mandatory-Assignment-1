"use strict"; //good practice

var exerciseProgramSchema = require("./../Models/exerciseProgramSchema");
var accountSchema = require("./../Models/accountSchema");


//REST Forces me to do this.
module.exports.GetAll = (req, res, next) => {

    let allExercises = [];
    accountSchema.User.find({}, (err, users) => {
        if (err || !users.length) {
            res.status(400);
            res.json({
                message: `Error: ${err} - are you sure any exercises exist?`
            });
        } else {
            users.forEach((user) => {
                users[user._id] = user;
            });
            users.forEach((user) => {

                user.exercisePrograms.forEach(ep => {
                    ep.exerciseProgram.forEach(exercise => allExercises.push(exercise));
                });
            });
            res.status(200);
            res.json({
                allExercises
            });
        }
    });
}

module.exports.Delete = (req, res, next) => {
    const exerciseProgramId = req.params.exerciseprogramid;
    const exerciseId = req.params.exerciseid;
    req.user.exercisePrograms.id(exerciseProgramId).exerciseProgram.splice(exerciseId, 1)
    req.user.save(function (err) {
        if (err) {
            res.status(400);
            res.json({
                message: "error: " + err
            });
        } else {
            res.status(200);
            res.json({
                message: "success"
            });
        }
    });


}

module.exports.Put = (req, res, next) => {
    const exerciseProgramId = req.params.exerciseprogramid;
    const exerciseId = req.params.exerciseid;
    req.user.exercisePrograms.id(exerciseProgramId).exerciseProgram.id(exerciseId).name = req.body.name;
    req.user.exercisePrograms.id(exerciseProgramId).exerciseProgram.id(exerciseId).description = req.body.description;
    req.user.exercisePrograms.id(exerciseProgramId).exerciseProgram.id(exerciseId).set = req.body.set;
    req.user.exercisePrograms.id(exerciseProgramId).exerciseProgram.id(exerciseId).repsOrTime = req.body.repsOrTime;

    req.user.save(function (err) {
        if (err) {
            res.status(400);
            res.json({
                message: "error: " + err
            });
        } else {
            res.status(200);
            res.json({
                message: "success"
            });
        }
    });

}

module.exports.Get = (req, res, next) => {
    const exerciseProgramId = req.params.exerciseprogramid;
    const exerciseId = req.params.exerciseid;

    if (req.user.exercisePrograms.id(exerciseProgramId).exerciseProgram.id(exerciseId)) {
        res.status(200);
        res.json({
            exerciseProgram: req.user.exercisePrograms.id(exerciseProgramId).exerciseProgram.id(exerciseId)
        });
    } else {
        res.status(400);
        res.json({
            message: "exercise program does not exist"
        });
    }
}


module.exports.Post = (req, res, next) => {
    const exerciseProgramId = req.params.exerciseprogramid;
    const exercise = new exerciseProgramSchema.exercise({
        name: req.body.name,
        description: req.body.description,
        set: req.body.set,
        repsOrTime: req.body.repsOrTime
    });
    req.user.exercisePrograms.id(exerciseProgramId).exerciseProgram.push(exercise);
    req.user.save(function (err) {
        if (err) {
            res.status(400);
            res.json({
                message: "error: " + err
            });
        } else {
            res.status(200);
            res.json({
                message: "success"
            });
        }
    });

};