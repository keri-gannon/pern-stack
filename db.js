const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'password',
  host: 'localhost',
  port: 5342,
  database: 'perntodo',
});

export default { pool };
