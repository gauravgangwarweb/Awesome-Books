/* eslint-disable linebreak-style */
class Book {
  constructor(bookId, bookTitle, bookAuthor) {
    this.bookId = bookId;
    this.bookTitle = bookTitle;
    this.bookAuthor = bookAuthor;
  }

  static addBookToStorage(bookDetails) {
    const { bookTitle, bookAuthor } = bookDetails;
    console.log('Adding books to storage', bookTitle, bookAuthor);
  }

  static removeBookFromStorage(bookId) {
    console.log(`Book with id ${bookId} removed from local storage`);
  }
}

export default Book;