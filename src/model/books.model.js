const path = require('path')



let books = [
    {
        id: 1,
        name: 'Fall To Earth',
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
        image: 'book1.jpg',
        status: 'published'
    },
    {
        id: 2,
        name: 'Waste Tide',
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
        image: 'book2.jpg',
        status: 'published',
    },
    {
        id: 3,
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
        image: 'book3.jpg',
        status: 'published',
    },
    {
        id: 4,
        name: 'A Million To One',
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
        image: 'book4.jpg',
        status: 'published',
    },
    {
        id: 5,
        name: 'Queenie',
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
        image: 'book5.jpg',
        status: 'published',
    },
    {
        id: 6,
        name: 'Harry Potter',
        author: 'J.K Rollin',
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
        image: 'book6.jpg',
        status: 'published',
    },
    {
        id: 7,
        name: 'It Ends With Us',
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
        image: 'book7.jpg',
        status: 'published',
    },
    {
        id: 8,
        name: 'Atomic Habit',
        author: 'James Clear',
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
        image: 'book8.jpg',
        status: 'published',
    },
    {
        id: 9,
        name: 'The Constantine',
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
        image: 'book9.jpg',
        status: 'published',
    },
    {
        id: 10,
        name: 'The Beauty',
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
        image: 'book10.jpg',
        status: 'published',
    },
]

function isBooksEmpty() {
    return books.length === 0 ? true 
    : books.filter(book => book.status === 'published').length === 0 ? true 
    : false
}

function getBooks() {
    return books
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
    newBook.status = 'published'
    books.push(newBook)

    return newBook
}

function updateBookbyId(bookId, book) {
    const { name, author, publisher, isbn, year, language, genre, page, summary } = book

    const bookIndex =  books.map(book => book.id).indexOf(bookId)
    let newBook = existBookById(bookId)[0]

    if (name !== undefined) newBook.name = name
    if (author !== undefined) newBook.author = author
    if (publisher !== undefined) newBook.publisher = publisher
    if (isbn !== undefined) newBook.isbn = isbn
    if (year !== undefined) newBook.year = year
    if (language !== undefined) newBook.language = language
    if (genre !== undefined) newBook.genre = genre
    if (page !== undefined) newBook.page = page
    if (summary !== undefined) newBook.summary = summary

    books[bookIndex] = newBook

    return newBook
}

function deleteBookById(bookId) {
    const deletedBook = existBookById(bookId)[0]
    const filteredBooks = books.filter(book => book.id !== bookId)
    books = JSON.parse(JSON.stringify(filteredBooks))
    return deletedBook
}

module.exports = {
    books,
    getBooks,
    isBooksEmpty,
    existBookById,
    existBookByIsbn,
    addNewBook,
    updateBookbyId,
    deleteBookById
}