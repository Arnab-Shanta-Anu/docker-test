const { application } = require("express");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    msg: "hello world",
  });
});

app.listen(4000);
