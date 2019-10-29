"use strict"; //good practice

const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const crypto = require("crypto");
const exerciseProgramSchema = require("./exerciseProgramSchema").Schema;

const accountSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      lowercase: true,
      required: [true, "kan ikke vaere tom"],
      /* match: [/^[a-zA-Z0-9]+$/, "er ugyldig"], */
      index: true
    },
    hash: String,
    salt: String,
    exercisePrograms: {
      type: [exerciseProgramSchema],
      default: []
    }
  },
  {
    timestamps: true
  }
);

accountSchema.plugin(uniqueValidator, {
  message: "findes allerede."
});

accountSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 90000, 32, "sha512")
    .toString("hex");
};

accountSchema.methods.validPassword = function(password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 90000, 32, "sha512")
    .toString("hex");
  return this.hash === hash;
};

const User = mongoose.model("User", accountSchema);
module.exports.User = User;
