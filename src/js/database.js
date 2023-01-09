const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'kate',
    password: '111',
    database: 'Media-content-analyze-system',
});

module.exports = connection;