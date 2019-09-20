var express = require("express");
var router = express.Router();

const ctrlAccount = require("./../Controllers/accountController");

/* GET home page. */
router.get("/", ctrlAccount.loginPage);
router.post("/login", ctrlAccount.login);

router.get("/signup", ctrlAccount.signupPage);

router.post("/signup", ctrlAccount.signup);

router.get("/logout", ctrlAccount.logout);

module.exports = router;
