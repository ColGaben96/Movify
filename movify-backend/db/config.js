const mysql = require('mysql');

// Set database connection credentials
const config = {
    host: 'remotemysql.com',
    user: 'NSs4HeJsBp',
    password: 'QytiTfrdqb',
    database: 'NSs4HeJsBp',
};

// Create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;

