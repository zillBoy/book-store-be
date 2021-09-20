const path = require('path')

const books = [
    {
        id: 1,
        name: 'The Martian',
        author: 'Andy Weir',
        publisher: 'Little, Brown Books for Young',
        isbn: '0316480207',
        year: '2018',
        language: 'English',
        genre: 'Sci-Fi',
        page: 390,
        summary: `Lorem ipsum dolor sit amet, consectetur adipiscing sddsas elit. Curabitur scelerisque leo augue, quis consequat ante ullamcorper vel. Duis turpis lectus, tincidunt nec ipsum sit amet, sodales tristique urna.
            Aliquam venenatis nunc ut nulla interdum, ut tincidunt metus convallis. Aenean posuere ultricies feugiat. Nulla semper maximus lectus, et suscipit leo pellentesque a. Nulla ac faucibus enim. Suspendisse potenti.
            Donec non accumsan ex, quis vulputate nulla. Aenean id libero elementum, rhoncus nisi a, hendrerit odio. Phasellus arcu ante, consequat vitae aliquet at, faucibus nec mi.
        `,
        image: path.join(__dirname, '..', 'public', 'images', 'book1.jpg'),
        status: 'published'
    }
]

function isBooksEmpty() {
    return books.length === 0 ? true 
    : books.filter(book => book.status === 'published').length === 0 ? true 
    : false
}

function existBookById(bookId) {
    return books.filter(book => book.id === bookId)
}

function existBookByIsbn(bookIsbn) {
    return books.filter(book => book.isbn === bookIsbn)
}

function addNewBook(book) {
    let newBook = book
    newBook.id = books.length + 1
    books.push(newBook)

    return newBook
}

module.exports = {
    books,
    isBooksEmpty,
    existBookById,
    existBookByIsbn,
    addNewBook
}