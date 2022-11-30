/* eslint-disable linebreak-style */
class Book {
  static #DATA_KEY = 'books';

  static #booksDataFromLocalStorage;

  constructor(bookId, bookTitle, bookAuthor) {
    this.bookId = bookId;
    this.bookTitle = bookTitle;
    this.bookAuthor = bookAuthor;
  }

  static #getBooksDataFromLocalStorage() {
    return JSON.parse(localStorage.getItem(this.#DATA_KEY));
  }

  static #saveBooksDataToLocalStorage(data) {
    localStorage.setItem(this.#DATA_KEY, JSON.stringify(data));
  }

  static get storedDataFromStorage() {
    return this.#getBooksDataFromLocalStorage();
  }

  static addBookToStorage(bookDetails) {
    console.log('Add book to storage...', bookDetails);
    this.#booksDataFromLocalStorage = this.#getBooksDataFromLocalStorage();

    if (!this.#booksDataFromLocalStorage) {
      this.newData = [];
      this.newData.push(bookDetails);
      this.#saveBooksDataToLocalStorage(this.newData);
      // this.location.reload();
      return;
    }

    this.updatedData = [...this.#getBooksDataFromLocalStorage()];
    this.updatedData.push(bookDetails);
    this.#saveBooksDataToLocalStorage(this.updatedData);
    // this.location.reload();
  }

  static removeBookFromStorage(bookId) {
    const dataFromStore = this.#getBooksDataFromLocalStorage();
    const updatedData = dataFromStore.filter((book) => book.bookId !== bookId);
    this.#saveBooksDataToLocalStorage(updatedData);
  }
}

export default Book;