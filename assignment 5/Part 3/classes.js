class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.available = true;
    }

    displayDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Available: ${this.available ? 'Yes' : 'No'}`;
    }
}

class Library {
    constructor() { 
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        this.updateLocalStorage();
    }

    removeBook(isbn) {
        this.books = this.books.filter(book => book.isbn !== isbn);
        this.updateLocalStorage();
    }

    displayBooks() {
        return this.books;
    }

    searchBooks(query) {
        return this.books.filter(book => 
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query) ||
            book.isbn.toLowerCase().includes(query)
        );
    }

    checkoutBook(isbn) {
        const book = this.books.find(book => book.isbn === isbn);
        if (book && book.available) {
            book.available = false;
            return true;
        }
        return false;
    }

    checkinBook(isbn) {
        const book = this.books.find(book => book.isbn === isbn);
        if (book && !book.available) {
            book.available = true;
            return true;
        }
        return false;
    }

    updateLocalStorage() {
        localStorage.setItem('library', JSON.stringify(this));
    }
}