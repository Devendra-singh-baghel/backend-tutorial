/*
Express JS


Q1. What is Express js.
Q2. Install Express js.
Q3. Express js flow.
Q4. Params in Express js.
Q5. Response in Express js
*/

import express from "express";

const app = express();

const port = 8000;

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});

app.get("/service", (req, res) => {
  res.send("<h1>Service Page</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
