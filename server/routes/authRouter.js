const express = require('express')
const validate = require('../middlewares/validate')
const yup = require("yup");

const router = express.Router()

const registerSchema = yup.object({
    body: yup.object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().required(),
        phoneNumber: yup.string().required(),
    })
});

router.post('/register', validate(registerSchema), (req, res) => {
    const { db, body } = req

    const sql = `
        INSERT INTO users(first_name, last_name, email, phone_number)
        VALUES(?, ?, ?, ?)
    `
    const sqlParams = [
        body.firstName,
        body.lastName,
        body.email,
        body.phoneNumber,
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
