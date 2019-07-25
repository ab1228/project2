require("dotenv").config();
// require mysql
var mysql = require('mysql');
var conn;

conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    // grab password from .env
    password: process.env.password,
    database: 'cars_db'
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