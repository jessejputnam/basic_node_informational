"use strict";

//* EXPRESS VERSION
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { text: "TEST" });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact-me", (req, res) => {
  res.render("contact-me");
});

app.listen(3000);

//* VANILLA NODE VERSION

// // Load HTTP Module
// const http = require("http");
// const fs = require("fs/promises");

// const port = process.env.PORT || 8080;

// // Create HTTP Server
// const server = http.createServer(async (req, res) => {
//   const pages = ["index", "contact-me", "about"];

//   // Default to index if no request, otherwise go to requested url
//   let reqPage = req.url.slice(1) || "index";
//   if (!pages.includes(reqPage)) reqPage = "404";

//   // Set the response HTTP header with HTTP status and content type
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");

//   const data = await fs.readFile(`./${reqPage}.html`, { encoding: "utf8" });

//   res.write(data);
//   res.end();
// });

// server.listen(port, () => {
//   console.log("Server running at port " + port);
// });
