
module.exports.loginPage = (req, res, next) => {
    res.render('index', { title: 'Mandatory Assignment 1 - Exercise Manager' });
  }

module.exports.login = (req, res, next) => {
    res.end();
  }
  

  module.exports.signupPage = (req, res, next) => {
    res.render('sign-up', { });
  }

module.exports.signup = (req, res, next) => {
    res.end();
  }
  
  