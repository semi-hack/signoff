//Should be where the api routes are

const express = require('express');
const api = express.Router();
const pool = require('./db.js');

api.post('/v1/age', async (req, res) => {

    try {
        const { age } = req.body;
        const newAge = await pool.query("INSERT INTO register (age) VALUES ($1) RETURNING *", [age])
    
        res.send(newAge.rows[0])
    } catch (err) {
        console.log(err.message)
    }
   
})

// api.post('/v1/mark', async (req, res) => {
//     try {

//     }
// })

api.get('/v1/age',  async (req, res) => {

    try {
        const result = await pool.query("SELECT * FROM register WHERE name = ($1)", [req.body.name])
        if(!result) {
            res.send("0")
        } 

        res.send(result.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

api.get('/v1/mark',  async (req, res) => {

    try {
        const result = await pool.query("SELECT * FROM register WHERE name = ($1)", [req.body.name])
        if(!result) {
            res.send("0")
        } 

        res.send(result.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

api.put('/v1/age', async (req, res) => {
    try {
        const result = await pool.query("UPDATE register SET age = $1 WHERE name = $2", [req.body.age, req.params.name])

        res.send(result)
    } catch (err) {
        console.error(err.message)
    }
})

api.put('/v1/mark', async (req, res) => {
    try {
        const result = await pool.query("UPDATE register SET mark = $1 WHERE name = $2", [req.body.mark, req.params.name])

        res.send(result)
    } catch (err) {
        console.error(err.message)
    }
})

api.delete('/v1/age', async (req, res) => {
    try {
        const result = await pool.query("DELETE FROM register WHERE name = $1", [req.params.name])
        if(!result){
            res.send("ok")
        }
        res.send("ok")
    } catch (err) {
        console.error(err.message)
    }
})

api.delete('/v1/mark', async (req, res) => {
    try {
        const result = await pool.query("DELETE FROM register WHERE name = $1", [req.params.name])
        if(!result){
            res.send("ok")
        }
        res.send("ok")
    } catch (err) {
        console.error(err.message)
    }
})

module.exports = api;
