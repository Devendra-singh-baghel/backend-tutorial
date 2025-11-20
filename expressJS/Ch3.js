/*
Middleware in express

Q1. What is Middleware.
Q2. Type of Middleware.
Q3. Middleware for age check.
Q4. Middleware for IP address.
*/

import express from "express";

const app = express();

const port = 8000;

const checkAgeMiddleware = (req, res, next) => {
    
  //Query params are strings :- req.query.age will come as a string, so comparing it with a number can behave oddly. Convert it to a number.

  const age = Number(req.query.age);

  if (!age || age < 18) {
    return res.send("<h2>You are not eligible to access this page!</h2>");
  }

  next();
};

app.use(checkAgeMiddleware);

app.get("/", (req, res) => {
  res.send("<h1>Home Page !</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Page !</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Page !</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
