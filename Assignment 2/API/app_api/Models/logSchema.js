"use strict"; //good practice

const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
    set: Number,
    repsOrTime: String
});

module.exports.Log = mongoose.model("Log", logSchema);
module.exports.logSchema = logSchema;