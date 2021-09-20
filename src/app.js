const express = require('express')
const booksRouter = require('./routes/books/books.router')

const app = express()

app.use(express.json())
app.use('/books', booksRouter)

module.exports = app