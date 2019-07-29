require("dotenv").config();
// require mysql
var mysql = require('mysql');
var conn;

conn = mysql.createConnection({
    host: DB_HOST,
    port: 3306,
    user: DB_USER,
    // grab password from .env
    password: DB_PASS,
    database: DB_DB
});

// connect to database
conn.connect((err) => {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected");
});

// export connection
module.exports = conn;