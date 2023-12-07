const express = require("express");
const cors = require("cors");
const { getUsuarios } = require("./consultas");
const app = express();

app.use(cors());

app.get("/", async (req, res) => {
  const usuarios = await getUsuarios();
  res.json(usuarios);
});

app.listen(3000, console.log("SERVER UP"));
