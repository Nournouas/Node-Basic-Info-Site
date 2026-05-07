#!/usr/bin/env node
const http = require('node:http');
const fs = require('fs');
const url = require('node:url');

// Create a local server to receive data from
const server = http.createServer();



// Listen to the request event
/*
server.on('request', (request, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  let html = fs.readFileSync('./views/index.html')
  console.log(html)
  res.end(html);
});
*/

server.on('request', (request, res) => {
  let parsedURL = url.parse(request.url, true);
  let parsedURL_Path = parsedURL.pathname;

  if (parsedURL_Path === "/"){
      res.writeHead(200, { 'Content-Type': 'text/html'});
      let html = fs.readFileSync('./views/index.html')
      res.end(html);
  } else if (parsedURL_Path === "/about"){
      res.writeHead(200, { 'Content-Type': 'text/html'});
      let html = fs.readFileSync('./views/about.html')
      res.end(html);
  } else if (parsedURL_Path === "/contact"){
      res.writeHead(200, { 'Content-Type': 'text/html'});
      let html = fs.readFileSync('./views/contact-me.html')
      res.end(html);
  }else {
      res.writeHead(200, { 'Content-Type': 'text/html'});
      let html = fs.readFileSync('./views/404.html')
      res.end(html);
  }
});

server.listen(8080);