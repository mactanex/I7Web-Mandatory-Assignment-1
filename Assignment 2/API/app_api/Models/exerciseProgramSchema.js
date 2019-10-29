const mongoose = require("mongoose");
import {
  logSchema
} from './logSchema';

const exerciseSchema = new mongoose.Schema({
  name: String,
  description: String,
  set: Number,
  repsOrTime: String,
  activities: [logSchema]
});

const exerciseProgramSchema = new mongoose.Schema({
  name: String,
  exerciseProgram: {
    type: [exerciseSchema],
    default: []
  }
});

module.exports.exerciseProgramSchema = mongoose.model(
  "ExerciseProgram",
  exerciseProgramSchema
);
module.exports.exerciseSchema = mongoose.model("Exercise", exerciseSchema);