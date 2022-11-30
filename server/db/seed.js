/**
 * Run this file to reset and even seed a new development environment if you want
 */
const db = require('../database')

const run = ((sql, params) => {
    return new Promise((resolve, reject) => {
        db.run(sql, params, function (err) {
            if (err) {
                console.error(err);
                return reject(err)
            }

            return resolve()
        })
    })
})

db.serialize(() => {
    return Promise.all([
        run(`DROP TABLE IF EXISTS users`),
        run(`DROP TABLE IF EXISTS registry_items`),
        run(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY,
                first_name TEXT NOT NULL,
                last_name TEXT NOT NULL,
                email TEXT NOT NULL
            );
        `),
        run(`
            CREATE TABLE IF NOT EXISTS registry_items (
                id INTEGER PRIMARY KEY,
                name TEXT NOT NULL,
                price NUMBER NOT NULL
            );
        `),
    ]).then(() => {
        console.log("database reset")
    })
})
db.close()