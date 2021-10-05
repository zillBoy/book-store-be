const express = require('express')
const multer = require('multer')
const path = require('path')
const { httpGetAllBooks, httpGetBookById, httpAddNewBook, httpUpdateBookById, httpUpdateBookImageById, httpDeleteBooksById } = require('./books.controller')

const booksRouter = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', '..', 'public', 'images', '/'))
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

booksRouter.get('/', httpGetAllBooks)
booksRouter.get('/:id', httpGetBookById)
booksRouter.post('/',  upload.single('photo'), httpAddNewBook)
booksRouter.put('/:id', httpUpdateBookById)
booksRouter.put('/image/:id', upload.single('photo'), httpUpdateBookImageById)
booksRouter.delete('/:id', httpDeleteBooksById)

module.exports = booksRouter