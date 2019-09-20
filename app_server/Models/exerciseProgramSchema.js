const mongoose = require('mongoose');

const exerciseProgramSchema = new mongoose.Schema({
    name: String,
    description: String,
    set: Number,
    repsOrTime: String
});

const exerciseProgramSchemas = new mongoose.Schema({
    exerciseProgramSchemas: {
        type: [exerciseProgramSchema],
        default: []
    }
});

module.exports.exerciseProgramSchemas = exerciseProgramSchemas;
module.exports.exerciseProgramSchema = exerciseProgramSchema;

mongoose.model('ExerciseProgram', exerciseProgramSchema);
mongoose.model('ExerciseProgram', exerciseProgramSchemas);