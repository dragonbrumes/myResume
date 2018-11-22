var express = require("express")
var path = require("path")
var http = require("http")

/***********************************************************
 * GANDI SIMPLE HOSTING VHOST
 * used only if hosting on gandi multiple domain
 ***********************************************************/

if (global.gandi) {
  module.exports = app
  app.listen = function() {}
}
/*  ***********************************************************/

app.use(express.static(path.join(__dirname, "dist")))

var http = require("http")
var port = process.env["PORT"] || 8080

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
    res.end(
      '<!DOCTYPE html><html><meta charset="utf-8"><title>It works' +
        "</title><b>It works!</b><br /><br />This is the server's " +
        "default server.js."
    )
  })
  .listen(port)
console.log("Server ready to accept requests on port %d", port)
