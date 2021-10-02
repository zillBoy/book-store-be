const express = require('express')
const cors = require('cors')
const path = require('path')
const booksRouter = require('./routes/books/books.router')

const app = express()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use('/books', booksRouter)
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app