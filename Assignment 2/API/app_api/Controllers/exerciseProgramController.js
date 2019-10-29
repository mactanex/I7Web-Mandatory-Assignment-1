"use strict"; //good practice

var exerciseProgramSchema = require("./../Models/exerciseProgramSchema");
var accountSchema = require("./../Models/accountSchema");


module.exports.GetAllExercises = (req, res, next) => {
  req.json({
    message: "success"
  });
}

module.exports.Delete = (req, res, next) => {
  req.json({
    message: "success"
  });
}

module.exports.Put = (req, res, next) => {
  req.json({
    message: "success"
  });
}

module.exports.Get = (req, res, next) => {
  req.json({
    message: "success"
  });
}



module.exports.NewExerciseProgram = (req, res, next) => {

  req.json({
    message: "success"
  });

  let exerciseProgram = {
    name: req.body.name
  };

  // const exerciseProgramId = req.params.exerciseprogramid;
  const lol = req.user;

  console.log(lol)

  //find index
  // const exerpr = accountSchema.User.find(u => u.)

  // req.user.exercisePrograms.findIndex(
  //   x => x._id == exerciseProgramId
  // );

  // const exProgram = req.user.exercisePrograms[index];
  // if (index > -1) {
  //   req.user.exercisePrograms.splice(index, 1);
  // }

  // exProgram.exerciseProgram.push(exercise);
  // //change new to add newly create exercise
  // req.user.exercisePrograms.push(exProgram);
  // save in db.
  // req.user.save(function (err) {
  //   if (err) {
  //     res.status(400);
  //     res.json({
  //       message: "error: " + err
  //     });
  //   } else {
  //     res.status(200);
  //     res.json({
  //       message: "success"
  //     });
  //   }
  // });


};

// module.exports.NewExerciseProgram = (req, res, next) => {
//   let exerciseProgram = {
//     name: req.body.name,
//     exerciseProgram: []
//   };
//   currentExerciseProgramTitle = exerciseProgram.name;
//   req.user.exercisePrograms.push(exerciseProgram);
//   req.user.save(function (err) {
//     if (err) {
//       res.status(400);
//       res.json({
//         message: "error: " + err
//       });
//     } else {
//       res.status(200);
//       res.json({
//         message: "success"
//       });
//     }
//   });

// };