const express = require("express");

const app = express();

app.use((re, res, next) => {
  res.setHeader("Access-Control-Allow-Orgin", "*");
  next();
});
app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "dasdklj455jd",
      title: "First Server Side",
      content: "This is comming from the server!"
    },
    {
      id: "45dsflj455jd",
      title: "Second Server Side",
      content: "This is comming from the server!"
    },
    {
      id: "dafdsf6455jd",
      title: "Third Server Side",
      content: "This is comming from the server!"
    }
  ];
  res.status(200).json({
    message: "Posts fetched successfully",
    posts: posts
  });
  next();
});

module.exports = app;
