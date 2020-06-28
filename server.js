const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
var path = require("path");
const app = express();
const PORT = process.env.PORT || 3000

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.listen(PORT, () =>{
    console.log(`App running on port ${PORT}!`);
});