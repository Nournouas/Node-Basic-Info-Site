#!/usr/bin/env node
const http = require('node:http');
const fs = require('fs');
const url = require('node:url');

// Create a local server to receive data from
const server = http.createServer();

server.on('request', (request, res) => {
  let parsedURL_Path = url.parse(request.url, true).pathname;
  let filePath = "";

  if (parsedURL_Path === "/"){
    filePath = "./views/index.html"
  }else{
    filePath = "./views".concat(parsedURL_Path).concat(".html")
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      fs.readFile("./views/404.html", (err404, notFoundData) => {
        res.writeHead(404, { 'Content-Type': 'text/html'});
        res.end(err404 ? 'Not Found' : notFoundData)
      });
    }else{
      res.writeHead(200, { 'Content-Type': 'text/html'});
      res.end(data);
    }
  })
  });

server.listen(8080);