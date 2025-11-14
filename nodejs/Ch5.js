/*
Make Simple API

Q1. Define static API data.
Q2. Use this data in server Response.
Q3. Check API data.
Q4. Test API with thunder client.
*/

const http = require("http");

const userData = [
  {
    userName: "Devendra",
    age: 27,
    tech: "MERN",
  },
  {
    userName: "Rishi",
    age: 28,
    tech: "ABAP",
  },
  {
    userName: "Vikas",
    age: 29,
    tech: "FIORY",
  },
];
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify(userData));
  res.end();
});

server.listen(8000);
