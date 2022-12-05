const express = require('express')
const yup = require("yup");
const validate = require('../middlewares/validate');

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

const postSchema = yup.object({
    body: yup.object({
        name: yup.string().required(),
        price: yup.number().required(),
    })
});

router.post('/items', validate(postSchema), async (req, res) => {
    const { db, body } = req

    // validate duplicate
    const check = await findDuplicate(db, body)
    if (check) {
        return res.status(400).json({ message: "Duplicate data" })
    }

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

router.delete('/items/:id', async (req, res) => {
    const { db, params } = req
    const id = params.id
    const sql = `DELETE from registry_items WHERE id = ?`
    const sqlParams = [id]

    return new Promise((resolve, reject) => {
        db.get(sql, sqlParams, function (err, row) {

            if (err) {
                console.error(err);
                return res.status(500).json()
            }

            return res.json({ message: "Success" })
        });
    })
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

const findDuplicate = (db, { name, price }) => {
    const sql = `SELECT * from registry_items WHERE name = ? AND price = ?`
    const sqlParams = [name, price]


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
