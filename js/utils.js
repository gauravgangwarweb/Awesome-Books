/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */

export const saveBooksDataToLocalStorage = (data) => {
  localStorage.setItem('books', JSON.stringify(data));
};