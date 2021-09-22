const express = require('express')
const { httpGetAllBooks, httpGetBookById, httpAddNewBook, httpUpdateBookById } = require('./books.controller')

const booksRouter = express.Router()

booksRouter.get('/', httpGetAllBooks)
booksRouter.get('/:id', httpGetBookById)
booksRouter.post('/', httpAddNewBook)
booksRouter.put('/:id', httpUpdateBookById)

module.exports = booksRouter