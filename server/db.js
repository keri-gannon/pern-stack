const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'kgannon',
  password: 'kgannon',
  host: 'localhost',
  port: 5342,
  database: 'perntodo',
});

module.exports = pool;
