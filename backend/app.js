const express = require("express");
const bodyParser = require("body-parser");
const postsRoutes = require("./routes/posts");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect(
    "mongodb+srv://vinh:NBEgPiNuMmbtddgE@cluster0-fnkkr.mongodb.net/node-angular?retryWrites=true"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection Fail!");
  });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((re, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,PUT, POST,PATCH,DELETE,OPTIONS"
  );
  next();
});
//NBEgPiNuMmbtddgE
app.use("/api/posts",postsRoutes);

module.exports = app;

// const posts = [
//   {
//     id: "dasdklj455jd",
//     title: "First Server Side",
//     content: "This is comming from the server!"
//   },
//   {
//     id: "45dsflj455jd",
//     title: "Second Server Side",
//     content: "This is comming from the server!"
//   },
//   {
//     id: "dafdsf6455jd",
//     title: "Third Server Side",
//     content: "This is comming from the server!"
//   }
// ];
