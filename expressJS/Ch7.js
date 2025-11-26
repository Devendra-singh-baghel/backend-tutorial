/*
Error-Handling Middleware

Q1. What is Error-Handling Middleware.
Q2. Example of Error-Handling middleware.
*/

import express from "express";

const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.send("<h1>Home Page !</h1>");
});

app.get("/about", (req, res) => {
  res.send1("<h1>About Page !</h1>");
});

app.get("/error", (req, res) => {
  res.send("<h1>Error Page !</h1>");
});

app.use((error, req, res, next) => {
  res
    .status(error.status || 500)
    .send("Something went wrong, try after some time!");
});

app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});
