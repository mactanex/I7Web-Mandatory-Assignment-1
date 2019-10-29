var mongoose = require("mongoose");

const dbName = "I7WebAss";
const connectionString =
  "mongodb+srv://malthedj:RjpVcKV_xC@65Ys@mandatoryassignment1-wbxsv.azure.mongodb.net/test?retryWrites=true&w=majority";
dbName;
mongoose.connect(connectionString, {
  useNewUrlParser: true
});

mongoose.connection.on("connected", () => {
  console.log(`Mongoose connected to ${connectionString}`);
});
mongoose.connection.on("error", err => {
  console.log("Mongoose connection error:", err);
});
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

// For nodemon restarts
process.once("SIGUSR2", () => {
  gracefulShutdown("nodemon restart", () => {
    process.kill(process.pid, "SIGUSR2");
  });
});
// For app termination
process.on("SIGINT", () => {
  gracefulShutdown("app termination", () => {
    process.exit(0);
  });
});
// For Heroku app termination
process.on("SIGTERM", () => {
  gracefulShutdown("Heroku app shutdown", () => {
    process.exit(0);
  });
});

const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through
        ${msg}`);
    callback();
  });
};
