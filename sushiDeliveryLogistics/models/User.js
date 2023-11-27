// models/user.js

const sqlite3 = require('sqlite3').verbose();

const db = require('./db_conf.js');

// Create a 'users' table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    email TEXT,
    password TEXT
  )
`);

// Define functions to interact with the 'users' table
const createUser = (username, email, password, callback) => {
  db.run('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password], callback);
};

const getUsers = (callback) => {
  db.all('SELECT * FROM users', callback);
};

module.exports = { createUser, getUsers };
