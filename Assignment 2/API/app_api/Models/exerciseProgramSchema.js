const mongoose = require("mongoose");
const logSchema = require("./logSchema").logSchema;

const exerciseSchema = new mongoose.Schema({
  name: String,
  description: String,
  set: Number,
  repsOrTime: String,
  activities: [logSchema],
}, { _id: true });

const exerciseProgramSchema = new mongoose.Schema({
  name: String,
  exerciseProgram: {
    type: [exerciseSchema],
    default: [],
  }

}, { _id: true });


module.exports.exercise = mongoose.model("Exercise", exerciseSchema);

module.exports.exerciseProgram = mongoose.model(
  "exerciseProgram",
  exerciseProgramSchema
);

module.exports.exerciceProgramSchema = exerciseProgramSchema;
module.exports.exerciseSchema = exerciseSchema;