import pg from "pg";
import {
  dbPort,
  databaseHost,
  username,
  databaseName,
  password,
  connectionString,
} from "./../config.js";

console.log(process.env.TESTING);

const pool = new pg.Pool({
  user: username,
  host: databaseHost,
  database: databaseName,
  password: password,
  port: dbPort,
  connectionString: connectionString,
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params, callback) {
  return pool.query(text, params, callback);
}
