const express = require('express')
const { httpGetAllBooks, httpGetBookById, httpAddNewBook, httpUpdateBookById, httpDeleteBooksById } = require('./books.controller')

const booksRouter = express.Router()

booksRouter.get('/', httpGetAllBooks)
booksRouter.get('/:id', httpGetBookById)
booksRouter.post('/', httpAddNewBook)
booksRouter.put('/:id', httpUpdateBookById)
booksRouter.delete('/:id', httpDeleteBooksById)

module.exports = booksRouter