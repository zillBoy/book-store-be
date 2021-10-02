const express = require('express')
const cors = require('cors')
const booksRouter = require('./routes/books/books.router')

const app = express()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use('/books', booksRouter)

module.exports = app