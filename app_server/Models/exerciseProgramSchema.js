const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    name: String,
    description: String,
    set: Number,
    repsOrTime: String
});

const exerciseProgramSchema = new mongoose.Schema({
    name: String,
    exerciseProgram: {
        type: [exerciseSchema],
        default: []
    }
});

module.exports.exerciseProgramSchema = exerciseProgramSchema;
module.exports.exerciseSchema = exerciseSchema;

mongoose.model('ExerciseProgram', exerciseProgramSchema);
mongoose.model('Exercise', exerciseSchemas);