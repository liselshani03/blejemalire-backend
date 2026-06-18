const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "blejemalire",
  password: "unjamlisi",
  port: 5432,
});

module.exports = pool;