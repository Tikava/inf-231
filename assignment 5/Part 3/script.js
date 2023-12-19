const library = new Library();

const savedLibrary = JSON.parse(localStorage.getItem('library'));

if (savedLibrary) {
    savedLibrary.books.forEach(book => {
        const loadedBook = new Book(book.title, book.author, book.isbn);
        loadedBook.available = book.available;
        library.addBook(loadedBook);
    });
}

function displayBooks() {
    const bookDisplay = document.getElementById('book-display');
    bookDisplay.innerHTML = ``;

    const books = library.displayBooks();

    books.forEach(book => {
        const listItem = document.createElement('li');
        listItem.textContent = book.displayDetails();
        listItem.setAttribute('data-isbn', book.isbn);

        bookDisplay.appendChild(listItem);
    });
}

function addBook(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    const book = new Book(title, author, isbn);
    library.addBook(book);
    displayBooks();
}

function removeBook() {
    const query = document.getElementById('delete-query').value;
    const searchResults = library.searchBooks(query);
    const bookDisplay = document.getElementById('book-display');

    searchResults.forEach(book => {
        const listItem = document.querySelector(`li[data-isbn="${book.isbn}"]`)

        if (listItem) {
            bookDisplay.removeChild(listItem);
            library.removeBook(book.isbn);
        }
    });
}

function searchBooks() {
    const query = document.getElementById('search-query').value.toLowerCase();
    const searchResults = library.searchBooks(query);
    const searchResultsList = document.getElementById('search-results-list');

    searchResultsList.innerHTML = '';

    searchResults.forEach(book => {
        const listItem = document.createElement('li');
        listItem.textContent = book.displayDetails();
        searchResultsList.appendChild(listItem);
    });
}

document.getElementById('add-book-form').addEventListener('submit', addBook);
document.getElementById('delete-button').addEventListener('click', removeBook);
document.getElementById('search-button').addEventListener('click', searchBooks);

displayBooks();