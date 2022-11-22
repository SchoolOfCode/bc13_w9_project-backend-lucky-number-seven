const ELEPHANT = process.env.POSTGRES_CONNECTION_URL;

const { Pool } = require("pg")
const pool = new Pool({
  connectionString: ELEPHANT,
});



module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
};


