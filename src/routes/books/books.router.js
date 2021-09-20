const express = require('express')
const { httpGetAllBooks, httpGetBookById, httpAddNewBook } = require('./books.controller')

const booksRouter = express.Router()

booksRouter.get('/', httpGetAllBooks)
booksRouter.get('/:id', httpGetBookById)
booksRouter.post('/', httpAddNewBook)

module.exports = booksRouter