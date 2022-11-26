const { Pool } = require("pg");

const pool = new Pool({
  // host: 'localhost',
  // user: 'postgres',
  // database: 'ideez',
  // password: 'sanjay123#',
  host: "ec2-54-86-224-85.compute-1.amazonaws.com",
  user: "belablahzwqxqf",
  database: "db7np6d7nc2n24",
  password: "2b9aaec90f20a64b5fc10045d5a183197682d61918b9313eb0dc6e48051a1c6d",
  port: "5432",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 30000,
  ssl: { rejectUnauthorized: false },
});

module.exports = pool;
