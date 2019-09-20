const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const db = require("./app_server/DAL/db");
const config_passport = require("./app_server/config/passport");
const passport = require("passport");

var session = require("express-session");

let auth = require("connect-ensure-login");

const indexRouter = require("./app_server/routes/index");
const usersRouter = require("./app_server/routes/users");
const exerciseRouter = require("./app_server/routes/exerciseProgram");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "app_server", "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// required for passport
app.use(session({ secret: "gobenobbergobenobber" })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/exerciseProgram", exerciseRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
