const express = require('express')

const router = express.Router()

router.get('/items', (req, res) => {
    const { db } = req

    const sql = `SELECT * FROM registry_items`
    const sqlParams = []


    db.all(sql, sqlParams, function (err, rows) {
        if (err) {
            console.error(err);
            return res.status(500).json()
        }

        return res.json(rows)
    });

})

router.post('/items', (req, res) => {
    const { db, body } = req

    const sql = `
        INSERT INTO registry_items(name, price)
        VALUES(?, ?)
    `
    const sqlParams = [
        body.name,
        body.price,
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

router.delete('/items/:id', (req, res) => {
    const { db, params } = req

    const sql = `DELETE FROM registry_items WHERE id = ?`
    const sqlParams = [params.id]


    db.run(sql, sqlParams, function (err) {
        if (err) {
            console.error(err);
            return res.status(500).json()
        }

        return res.json()
    });

})

module.exports = router
