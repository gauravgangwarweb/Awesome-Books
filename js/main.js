/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */

import bookCardBuilder from './bookCardBuilder.js';
import { getBooksDataFromLocalStorage, saveBooksDataToLocalStorage } from './utils.js';

const addButton = document.querySelector('#add-data');
const cardsDiv = document.querySelector('.book-author-collections');

const booksData = [];
const dataFromLocalStorage = getBooksDataFromLocalStorage('books');

const displayData = () => {
  const booksData = getBooksDataFromLocalStorage('books');
  if (!booksData) {
    cardsDiv.innerHTML += '<p>No data to display</p>';
    return;
  }

  booksData.forEach((book) => {
    const bookCard = bookCardBuilder(book);
    cardsDiv.innerHTML += bookCard;
  });
};

displayData();

addButton.addEventListener('click', (e) => {
  e.preventDefault();

  const title = document.querySelector('#book-title');
  const author = document.querySelector('#author-name');

  const bookDetails = {
    title: title.value,
    author: author.value,
  };

  if (!dataFromLocalStorage) {
    booksData.push(bookDetails);
    saveBooksDataToLocalStorage('books', booksData);
  }

  dataFromLocalStorage.push(bookDetails);
  saveBooksDataToLocalStorage('books', dataFromLocalStorage);
});