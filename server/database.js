const path = require("path")
const sqlite3 = require('sqlite3').verbose();

// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, 'db/database.sqlite')

const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err)
    return process.exit(0)
  }
});

module.exports = db