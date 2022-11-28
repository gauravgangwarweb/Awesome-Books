/* eslint-disable linebreak-style */
import bookCardBuilder from './bookCardBuilder';
import { getBooksDataFromLocalStorage, saveBooksDataToLocalStorage } from './utils';

const addButton = document.querySelector('#add-data');
const cardsDiv = document.querySelector('.book-author-collections');

const displayData = () => {
  const booksData = getBooksDataFromLocalStorage();
  booksData.forEach((book) => {
    const bookCard = bookCardBuilder(book);
    cardsDiv.innerHTML += bookCard;
  });
};

addButton.addEventListener('click', () => {
  const title = document.querySelector('#book-title');
  const author = document.querySelector('#author-name');

  const bookDetails = {
    title: title.value,
    author: author.value,
  };

  const booksData = [...getBooksDataFromLocalStorage(), ...bookDetails];
  saveBooksDataToLocalStorage(booksData);
});