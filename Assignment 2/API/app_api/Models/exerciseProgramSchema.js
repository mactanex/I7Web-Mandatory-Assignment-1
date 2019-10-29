const mongoose = require("mongoose");
const logSchema = require("./logSchema").logSchema;

const exerciseSchema = new mongoose.Schema({
  name: String,
  description: String,
  set: Number,
  repsOrTime: String,
  activities: [logSchema]
}, {
  _id: true
});

const exerciseProgramSchema = new mongoose.Schema({
  name: String,
  exerciseProgram: {
    type: [exerciseSchema],
    default: [],
  },
  // _id: true
}, {
  _id: true
});

module.exports.exerciseProgramSchema = mongoose.model(
  "ExerciseProgram",
  exerciseProgramSchema
);
module.exports.exerciseSchema = mongoose.model("Exercise", exerciseSchema);