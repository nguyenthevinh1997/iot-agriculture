const express = require("express");
const bodyParser = require("body-parser");
const Post = require("./models/post");
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
    "GET, POST,PATCH,DELETE,OPTIONS"
  );
  next();
});
//NBEgPiNuMmbtddgE
app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save().then(createdPost => {
    res.status(201).json({
      message: "Post added successfully",
      postId: createdPost._id
    });
  });
});
app.get("/api/posts", (req, res, next) => {
  Post.find().then(documents => {
    console.log(documents);
    res.status(200).json({
      message: "Posts fetched successfully",
      posts: documents
    });
  });
});
app.delete("/api/posts/:id", (req, res, next) => {
  console.log(req.params.id);
  Post.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
  });
  res.status(200).json({
    message: "Posts deleted!"
  });
});

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
