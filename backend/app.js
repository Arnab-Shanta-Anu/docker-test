const { application } = require("express");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    msg: "hello world",
  });
});
app.get("/docker", (req, res) => {
  res.json({
    msg: "hello from docker",
  });
});

app.listen(4000, () => {
  console.log("listeing on port 4000...");
});
