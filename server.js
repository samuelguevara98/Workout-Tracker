const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
var path = require("path");
const { connect } = require("http2");
const { userInfo } = require("os");
const app = express();
const PORT = process.env.PORT || 3000
const db = mongoose.connection;

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

//db code
db.on("error", error => {
    console.log("Encountered a database error!", error);
});

mongoose/connect(process.env/MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}!`)
});