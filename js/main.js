import Book from './Book.js';
import bookCardBuilder from './bookCardBuilder.js';
import getUniqueIdentifier from './utils.js';

const addBookForm = document.querySelector('#addBook');
const cardsDiv = document.querySelector('.book-author-collections');

const displayData = () => {
  const booksData = Book.getStoredDataFromStorage;
  if (!booksData || booksData.length === 0) {
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
  const cardId = getUniqueIdentifier();

  const newBookInstance = new Book(cardId, title.value, author.value);
  Book.addBookToStorage(newBookInstance);
  window.location.reload();
});

document.addEventListener('click', (e) => {
  const isRemoveBtn = document.querySelector('[data-remove-btn]');

  if (isRemoveBtn && e.target.closest('.book-author--card') && e.target.classList.contains('btn-remove')) {
    const card = e.target.closest('.book-author--card');
    const cardId = card.getAttribute('id');
    Book.removeBookFromStorage(cardId);
    window.location.reload();
  }
});