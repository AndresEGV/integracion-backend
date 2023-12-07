const { Pool } = require("pg");

const config = {
  host: "dpg-clp4g31oh6hc73bsqnsg-a.oregon-postgres.render.com",
  user: "user",
  password: "bdaxFnvdIWFl8YMBA3VSdfoElkoYwnig",
  database: "example_v9d1",
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
