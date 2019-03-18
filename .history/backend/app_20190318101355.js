const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((re, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Controll-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  res.setHeader("Access-Control-Allow-Methods","GET, POST,PATCH,DELETE,OPTIONS");
  next();
});
app.post('/api/posts', (req, res,next) => {
  console.log();
  
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
