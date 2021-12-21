const Pool =  require("pg").Pool
const Knex = require("Knex")

// const pool = new Pool({
//     user: "postgres",
//     password: "2signOff",
//     database: "postgres",
//     host: "scalable-se:europe-west1:signofftask",
// });


const createUnixSocketPool = async config => {
    const dbSocketPath = process.env.DB_SOCKET_PATH || '/cloudsql';
  
    // Establish a connection to the database
    return Knex({
      client: 'pg',
      connection: {
        user: "postgres", // e.g. 'my-user'
        password: "2signOff", // e.g. 'my-user-password'
        database: "postgres", // e.g. 'my-database'
        host: "scalable-se:europe-west1:signofftask",
      },
      // ... Specify additional properties here.
      ...config,
    });
};


const createPool = async () => {
  const config = {pool: {}};
  config.pool.max = 5;
  config.pool.min = 5;

  return await createUnixSocketPool(config)

}

let pool
const poolPromise = createPool()
  .then(async (pool) => {
    return pool;
  })
  .catch((err) => {
    logger.error(err);
    process.exit(1)
});

module.exports = poolPromise;