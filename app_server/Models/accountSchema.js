const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const crypto = require('crypto');
const exerciseProgramSchema = require('./exerciseProgramSchema')

const accountSchema = new mongoose.Schema({
    username: {
        type: String,
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        index: true
    },
    hash: String,
    salt: String,
    exercisePrograms: {
        type: [exerciseProgramSchema],
        default: []
    }
}, {
    timestamps: true
});

accountSchema.plugin(uniqueValidator, {
    message: 'findes allerede.'
});

accountSchema.methods.setPassword = function ( password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha256').toString('binary');
};

accountSchema.methods.validPassword = function ( password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('binary');
    return this.hash === hash
};

const User = mongoose.model('User', accountSchema);
module.exports.User = User;