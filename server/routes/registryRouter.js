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

        findById(db, this.lastID)
            .then(row => {
                return res.json(row)
            })
            .catch(e => {
                console.error(e);
                return res.status(500).json()
            })
    });
})

const findById = (db, id) => {
    const sql = `SELECT * from registry_items WHERE id = ?`
    const sqlParams = [id]


    return new Promise((resolve, reject) => {
        db.get(sql, sqlParams, function (err, row) {
            if (err) {
                return reject(err)
            }

            return resolve(row)
        });
    })
}

module.exports = router
