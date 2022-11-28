/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/extensions */

import bookCardBuilder from './bookCardBuilder.js';
import { getBooksDataFromLocalStorage, saveBooksDataToLocalStorage } from './utils.js';

const addButton = document.querySelector('#add-data');
const cardsDiv = document.querySelector('.book-author-collections');

const booksData = [];
const booksDataFromLocalStorage = getBooksDataFromLocalStorage('books');

const displayData = () => {
  const booksData = getBooksDataFromLocalStorage('books');
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

addButton.addEventListener('click', () => {
  // e.preventDefault();

  const title = document.querySelector('#book-title');
  const author = document.querySelector('#author-name');
  const cardId = title.value.split(' ').join('').toLowerCase();

  const bookDetails = {
    id: cardId,
    title: title.value,
    author: author.value,
  };

  if (!booksDataFromLocalStorage) {
    booksData.push(bookDetails);
    saveBooksDataToLocalStorage('books', booksData);
  }

  booksDataFromLocalStorage.push(bookDetails);
  saveBooksDataToLocalStorage('books', booksDataFromLocalStorage);
});

document.addEventListener('click', (e) => {
  const isRemoveBtn = document.querySelector('[data-remove-btn]');

  if (isRemoveBtn) {
    const card = e.target.closest('.book-author--card');
    const cardId = card.getAttribute('id');
    const newData = booksDataFromLocalStorage.filter((book) => book.id !== cardId);
    saveBooksDataToLocalStorage('books', newData);
    location.reload();
  }
});