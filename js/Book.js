/* eslint-disable linebreak-style */
class Book {
  #DATA_KEY = 'books';

  constructor(bookId, bookTitle, bookAuthor) {
    this.bookId = bookId;
    this.bookTitle = bookTitle;
    this.bookAuthor = bookAuthor;
  }

  #getBooksDataFromLocalStorage() {
    return JSON.parse(localStorage.getItem(this.#DATA_KEY));
  }

  #saveBooksDataToLocalStorage(data) {
    localStorage.setItem(this.#DATA_KEY, JSON.stringify(data));
  }

  static addBookToStorage(bookDetails) {
    const { bookTitle, bookAuthor } = bookDetails;
    console.log('Adding books to storage', bookTitle, bookAuthor);
    // Check to see wether it is the first time of adding book to local storage
    // If it is the first time, push the book into a local arrray, and save the array into 
    // local storage
    // Else, copy data from local storage into new array and push the new data into 
    // the array. Aterwards, push the array to local storage.
  }

  static removeBookFromStorage(bookId) {
    console.log(`Book with id ${bookId} removed from local storage`);
  }
}

export default Book;