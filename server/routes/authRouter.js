const express = require('express')

const router = express.Router()

router.post('/register', (req, res) => {
    const { db, body } = req

    const sql = `
        INSERT INTO users(first_name, last_name, email)
        VALUES(?, ?, ?)
    `
    const sqlParams = [
        body.firstName,
        body.lastName,
        body.email,
    ]


    db.run(sql, sqlParams, function (err, data) {
        if (err) {
            console.error(err);
            return res.status(500).json()
        }

        // get the last insert id
        // console.log(`A row has been inserted with rowid ${this.lastID}`);
        return res.json()
    });

})

module.exports = router
