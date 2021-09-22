const { books, isBooksEmpty, existBookById, existBookByIsbn, addNewBook, updateBookbyId } = require('../../model/books.model')

// Get All Books - Endpoint
function httpGetAllBooks(req, res) {

    if (isBooksEmpty()) return res.status(400).json({
        error: 'There are currently no books'
    })

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
    const book = req.body
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
    const bookExist = existBookById(Number(book.id))

    if (!book.id) return res.status(400).json({
        error: 'Please provide book id in order to update book'
    })

    if (bookExist.length == 0) {
        return res.status(400).json({
            error: 'Book with the current id does not exist'
        })
    }

    const updatedBook = updateBookbyId(Number(book.id), book)
    return res.status(200).json(updatedBook)
}

module.exports = {
    httpGetAllBooks,
    httpGetBookById,
    httpAddNewBook,
    httpUpdateBookById
}