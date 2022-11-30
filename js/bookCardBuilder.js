/* eslint-disable linebreak-style */
const bookCardBuilder = (data) => {
  const { bookId, bookTitle, bookAuthor } = data;
  const card = `
      <div class="book-author--card" id="${bookId}">
        <p>${bookTitle}</p>
        <p>${bookAuthor}</p>
        <button type="button"  data-remove-btn>Remove</button>
      </div>
  `;
  return card;
};

export default bookCardBuilder;