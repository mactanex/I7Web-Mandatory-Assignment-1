"use strict"; //good practice

var accountSchema = require("./../Models/accountSchema");

"use strict"; //good practice

var exerciseProgramSchema = require("./../Models/exerciseProgramSchema");
var accountSchema = require("./../Models/accountSchema");
var logSchema = require("./../Models/logSchema");


//REST Forces me to do this.
module.exports.GetAll = (req, res, next) => {
    let allActivites = [];
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
                    ep.exerciseProgram.forEach(exercise => {
                        exercise.activities.forEach(log => allActivites.push(log))
                    });
                });
            });
            res.status(200);
            res.json({
                allActivites
            });
        }
    });
}

module.exports.Delete = (req, res, next) => {
    const exerciseProgramId = req.params.exerciseprogramid;
    const exerciseId = req.params.exerciseid;
    const activityId = req.params.activityid;
    req.user.exercisePrograms.id(exerciseProgramId).exerciseProgram.id(exerciseId).activities.splice(activityId, 1)
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
    const activityId = req.params.activityid;

    req.user.exercisePrograms.id(exerciseProgramId).exerciseProgram.id(exerciseId).activities.id(activityId).set = req.body.set;
    req.user.exercisePrograms.id(exerciseProgramId).exerciseProgram.id(exerciseId).activities.id(activityId).repsOrTime = req.body.repsOrTime;

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
    const activityId = req.params.activityid;

    if (req.user.exercisePrograms.id(exerciseProgramId).exerciseProgram.id(exerciseId).activities.id(activityId)) {
        res.status(200);
        res.json({
            exerciseProgram: req.user.exercisePrograms.id(exerciseProgramId).exerciseProgram.id(exerciseId).activities.id(activityId)
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
    const exerciseId = req.params.exerciseid;
    const activity = new logSchema.Log({
        set: req.body.set,
        repsOrTime: req.body.repsOrTime
    });

    req.user.exercisePrograms.id(exerciseProgramId).exerciseProgram.id(exerciseId).activities.push(activity);
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