const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/database.sqlite', (err) => {
  if (err) {
    console.error('Error opening database', err);
  } else {
    console.log('Connected to SQLite database');
  }
});

db.serialize(() => {
  // Create Sessions table
  db.run(`CREATE TABLE IF NOT EXISTS Sessions (
    sessionID TEXT PRIMARY KEY,
    phoneNumber TEXT,
    userInput TEXT
  )`);

  // Create Transactions table
  db.run(`CREATE TABLE IF NOT EXISTS Transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sessionID TEXT,
    transactionType TEXT,
    amount REAL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
});

module.exports = db;