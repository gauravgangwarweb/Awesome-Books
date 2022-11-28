/* eslint-disable linebreak-style */
import bookCardBuilder from './bookCardBuilder';
import { getBooksDataFromLocalStorage } from './utils';

const addButton = document.querySelector('#add-data');
const cardsDiv = document.querySelector('.book-author-collections');
const getLocalst = JSON.parse(localStorage.getItem('books'));

const booksData = [];

const displayData = () => {
  const booksData = getBooksDataFromLocalStorage();
  booksData.forEach((book) => {
    const bookCard = bookCardBuilder(book);
    cardsDiv.innerHTML += bookCard;
  });
};



// if(getLocalst == undefined) {
//     cardsDiv.innerHTML = `<div></div>`
// } else {
//     for(let i=0; i<getLocalst.length; i++){
//         cardsDiv.innerHTML += `
//     <div class="book-author--card">
//           <p>${getLocalst[i].Title}</p>
//           <p>${getLocalst[i].Author}</p>
//           <button type="button" data-remove>Remove</button>
//         </div>
//     `
//     }
// }


// add-function
addButton.addEventListener('click', () => {
    const title = document.querySelector('#book-title');
    const author = document.querySelector('#author-name');

    const book = {
        Title: title.value,
        Author: author.value,
    }
    
    
    const getLocal = JSON.parse(localStorage.getItem('books'));
    console.log(getLocal);
    if(getLocal == undefined){
        booksData.push(book);
        localStorage.setItem('books', JSON.stringify(booksData));
    } else {
        getLocal.push(book);
        localStorage.setItem('books', JSON.stringify(getLocal));
    }
})