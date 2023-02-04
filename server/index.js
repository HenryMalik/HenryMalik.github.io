const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    msg: "hello world",
  });
});

app.get("/tweet", (req, res) => {
  setTimeout(() => {
    res.json([
      {
        id: 1,
        name: "@ucup",
        tweet: "hello world",
      },
      {
        id: 2,
        name: "@hendry",
        tweet: "belajar react-js",
      },
      {
        id: 3,
        name: "@ucup",
        tweet: "express adalah backend terbaik",
      },
    ]);
  }, 2000);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
