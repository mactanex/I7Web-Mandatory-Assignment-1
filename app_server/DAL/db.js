var mongoose = require("mongoose");

const dbName = "I7WebAss";
const connectionString = "http://localhost:27017/" + dbName;
mongoose.connect(connectionString, {
    useNewUrlParser: true
});