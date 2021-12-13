const Pool =  require("pg").Pool

// const pool = new Pool({
//     user: "postgres",
//     password: "2signOff",
//     database: "postgres",
//     host: "scalable-se:europe-west1:signofftask",
// });

const pool = new Pool({
    user: "lcljaeqfwloxep",
    password: "e6b9b9e89c861f5e5d877239357f82ec8c19248d6ce9c25a6a984b31b4d3d21a",
    database: "d1p6j786j708rv",
    host: "ec2-54-195-141-170.eu-west-1.compute.amazonaws.com",
    port: 5432
});


//   process.env.INSTANCE_CONNECTION_NAME || '<YOUR INSTANCE CONNECTION NAME>';
// const dbUser = process.env.SQL_USER || '<YOUR DB USER>';
// const dbPassword = process.env.SQL_PASSWORD || '<YOUR DB PASSWORD>';
// const dbName = process.env.SQL_NAME

module.exports = pool;