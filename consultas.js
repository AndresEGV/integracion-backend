const { Pool } = require("pg");
require("dotenv").config();
const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: 5432,
  allowExitOnIdle: true,
  ssl: true,
};

const pool = new Pool(config);

const getUsuarios = async () => {
  const { rows } = await pool.query("select * from usuarios");
  return rows;
};

module.exports = {
  getUsuarios,
};
