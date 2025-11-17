/*
Rander Html and 404 file in express

Q1. Create Html files
Q2. Rander file
Q3. Create 404 file
Q4. Rander 404 file
Q5. What is absolute path.
*/


import express from "express";
import path from "path";

const app = express();

app.get("/", (req, res) => {
  const absPath = path.resolve("files/login.html");
  res.sendFile(absPath);
});

app.get("/signup", (req, res) => {
  const absPath = path.resolve("files/signup.html");
  res.sendFile(absPath);
});

app.use((req, res)=>{
const absPath = path.resolve('files/404.html')
res.status(404).sendFile(absPath);
});

app.listen(8000);
