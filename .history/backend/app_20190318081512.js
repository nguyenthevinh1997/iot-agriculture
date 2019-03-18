const express = require("express");

const app = express();

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
  res.json();
});

module.exports = app;
