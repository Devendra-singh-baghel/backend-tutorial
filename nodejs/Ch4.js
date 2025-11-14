/*
Understand Server Response

Q1. What is server response?
Q2. Write code fo server response.
Q3. Pass variable and functions data with response.
Q4. How to exit any request in node.js
Q5. How to exit process in node.js
*/

const http = require("http");

const greet = "Wellcome!"
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write(
    `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Server Response</title>
        </head>
        <body>
            <h2>This is server response.</h2>
            <h2>`+greet+`</h2>
            <h2>`+new Date()+`</h2>
        </body>
        </html>
        `
  );
  res.end();    //exit the current request
  process.exit();   //exit the entire process
});

server.listen(8000);
