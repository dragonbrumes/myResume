var express = require("express")
var path = require("path")
var http = require("http")

const app = express()

/***********************************************************
 * GANDI SIMPLE HOSTING VHOST
 * used only if hosting on gandi multiple domain
 ***********************************************************/

if (global.gandi) {
  module.exports = app
  app.listen = function() {}
}
/*  ***********************************************************/

// Serve static assets
app.use(express.static(path.resolve(__dirname, "./", "dist")))

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./dist", "index.html"))
})

var http = require("http")
// force port on gandi hosting (multiples instance)
// var port = process.env["PORT"] || 8000
var port = 8000

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
console.log("Lanteri resume Front Server ready on port %d", port)
