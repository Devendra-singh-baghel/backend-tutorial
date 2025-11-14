/*
Create Server in Node js

Q1. Why we need server?
Q2. Write code for create server?
Q3. Understand use of request and response params?
Q4. Can we create more than one server in same file?
*/

const http = require('http');

const server = http.createServer((request, response)=>{
    response.write("New Server Created.");
    response.write("<h1>We can also write HTML code here.</h1>");
    response.end("Server End!")
})

server.listen(4800);