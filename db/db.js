const pg = require("pg");

// change this to your actual local database name
const localDbName = "happy_feet_app";

let db;
if (process.env.DATABASE_URL) {
  db = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else {
  if (process.env.DB_PASSWORD) {
    db = new pg.Pool({
      database: localDbName,
      password: process.env.DB_PASSWORD,
    });
  } else {
    db = new pg.Pool({
      database: localDbName,
    });
  }
}

module.exports = db;
