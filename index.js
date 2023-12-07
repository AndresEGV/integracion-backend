const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "Hola mundo" });
});

app.listen(3000, console.log("UP"));
