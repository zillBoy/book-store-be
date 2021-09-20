const express = require('express')

const app = express()

app.get('/books', (req, res) => {
    res.status(200).json({
        message: 'book store backend'
    })
})

module.exports = app