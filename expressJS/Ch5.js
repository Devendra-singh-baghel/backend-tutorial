/*
Built-in Middleware in express js

Q1. What is Built-in Middleware.
Q2. Examples of 2 Built-in Middleware.
*/

import express from "express";
import path from "path";

const app = express();

const PORT = 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  const absPath = path.resolve("files/login.html");
  res.sendFile(absPath);
});

app.get("/signup", (req, res) => {
  const absPath = path.resolve("files/signup.html");
  res.sendFile(absPath);
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("<h1>Form Submited.</h1>");
});

app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});
