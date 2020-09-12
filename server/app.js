"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const app = express();

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://127.0.0.1:27017/admitKard"
let db;

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

//routes
app.use("/api/admitKard/userLogin", userRoutes);
module.exports = app;