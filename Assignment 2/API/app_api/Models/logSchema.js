"use strict"; //good practice

const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
    set: Number,
    repsOrTime: String
}, {
    timestamps: true
});

const Log = mongoose.model("Log", logSchema);

module.exports.Log = Log;
module.exports.logSchema = logSchema;