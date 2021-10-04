const { getBooks, isBooksEmpty, existBookById, existBookByIsbn, addNewBook, updateBookbyId, deleteBookById } = require('../../model/books.model')

// Validation
function validation(res, id) {
    const bookExist = existBookById(Number(id))

    if (isNaN(id)) return res.status(400).json({
        error: 'Please enter correct id'
    })

    if (!id) return res.status(400).json({
        error: 'Please provide book id in order to update book'
    })

    if (bookExist.length == 0) return res.status(404).json({
        error: 'Book with the current id does not exist'
    })
}

// Get All Books - Endpoint
function httpGetAllBooks(req, res) {
    if (isBooksEmpty()) return res.status(400).json({
        error: 'There are currently no books'
    })

    const books = getBooks()
    return res.status(200).json(books)
}

function httpGetBookById(req, res) {
    const bookId = Number(req.params.id)
    const book = existBookById(bookId)

    if (book.length === 0) return res.status(404).json({
        error: 'Book not found'
    })

    return res.status(200).json(book)
}

function httpAddNewBook(req, res) {

    const file = req.file

    const book = req.body
    book.image = file.filename

    const bookIsbn = book.isbn
    const bookExist = existBookByIsbn(bookIsbn)

    if (!book.name || !book.author || !book.publisher || !book.isbn || !book.year || !book.language || !book.genre || !book.page || !book.summary || !book.image) {
        return res.status(400).json({
            error: 'Please provide all information'
        })
    }
    
    if (bookExist.length !== 0) return res.status(400).json({
        error: 'Cannot add book, a book already exist by this isbn number'
    })

    if (isNaN(book.page)) return res.status(400).json({
        error: 'Please enter correct page value'
    })

    book.page = Number(book.page)
    const newBook = addNewBook(book)

    return res.status(201).json(newBook)
}

function httpUpdateBookById(req, res) {
    
    const book = req.body
    const bookId = req.params.id

    validation(res, bookId)

    const updatedBook = updateBookbyId(Number(bookId), book)
    return res.status(200).json(updatedBook)
}

function httpDeleteBooksById(req, res) {
    const bookId = req.params.id
    
    validation(res, bookId)

    const deletedBook = deleteBookById(Number(bookId))
    return res.status(200).json(deletedBook)
}


module.exports = {
    httpGetAllBooks,
    httpGetBookById,
    httpAddNewBook,
    httpUpdateBookById,
    httpDeleteBooksById
}