var express = require('express');
var mongoose = require('mongoose');
var accountSchema = require('./../Models/accountSchema');


module.exports.loginPage = (req, res, next) => {
    res.render('index', { title: 'Mandatory Assignment 1 - Exercise Manager' });
  }

module.exports.login = (req, res, next) => {

    res.redirect('/exerciseProgram');
  }
  

module.exports.signupPage = (req, res, next) => {
    res.render('sign-up', { });
  }

module.exports.signup = (req, res, next) => {
    const userInstance = new accountSchema.User({username: 'Kristoffer'});
    userInstance.setPassword('sommerguf');
    userInstance.save();
    res.redirect('/');
  }
  
  