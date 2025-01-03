const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Ifshads server running..........");
});

app.get("/hello", (req, res) => {
//   const data = req.body;
  res.send(`hello route`);
});

app.listen(port, () => {
  console.log(`app listening on port:${port}`);
});
