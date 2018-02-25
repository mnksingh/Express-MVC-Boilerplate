const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const passport = require("passport");
require("./middlewares/passport")(passport);

const DB_NAME = "sample";

const app = express();

mongoose.Promise = require("bluebird");

const env = process.env.NODE_ENV;

if (env != "testing") {
  mongoose.connect(`mongodb://localhost/${DB_NAME}`);
  mongoose.connection.on("error", err => {
    console.log("DATABASE CONNECTION ERROR:", err);
  });
  mongoose.connection.once("open", () => {
    console.log(`App connected to database ${DB_NAME}`);
  });
}

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

app.get("/api/v1", (req, res, next) => {
  res.send({
    status: "Running"
  });
});

const routes = require("./routes/routes");

app.use("/api/v1", routes);

app.use((err, req, res, next) => {
  res.status(err.status || 422).json(err);
});

module.exports = app;
