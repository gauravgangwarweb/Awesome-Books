/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/extensions */

import Book from './Book.js';
import bookCardBuilder from './bookCardBuilder.js';

const addBookForm = document.querySelector('#addBook');
const cardsDiv = document.querySelector('.book-author-collections');

const displayData = () => {
  const booksData = Book.storedDataFromStorage;
  if (!booksData) {
    cardsDiv.innerHTML += '<p>No data to display...</p>';
    return;
  }

  booksData.forEach((book) => {
    const bookCard = bookCardBuilder(book);
    cardsDiv.insertAdjacentHTML('afterbegin', bookCard);
  });
};

displayData();

addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#book-title');
  const author = document.querySelector('#author-name');
  const cardId = title.value.split(' ').join('').toLowerCase();

  const newBookInstance = new Book(cardId, title.value, author.value);
  Book.addBookToStorage(newBookInstance);
  location.reload();
});

document.addEventListener('click', (e) => {
  const isRemoveBtn = document.querySelector('[data-remove-btn]');

  if (isRemoveBtn) {
    const card = e.target.closest('.book-author--card');
    const cardId = card.getAttribute('id');
    Book.removeBookFromStorage(cardId);
    location.reload();
  }
});