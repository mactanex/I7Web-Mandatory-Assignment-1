var express = require('express');
var router = express.Router();

const ctrlAccount = require('./../Controllers/accountController');


/* GET home page. */
router.get('/', ctrlAccount.loginPage);
router.post('/', ctrlAccount.login);
router.get('/signup', ctrlAccount.signupPage);



module.exports = router;
