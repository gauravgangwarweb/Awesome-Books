/* eslint-disable linebreak-style */
const bookCardBuilder = (data) => {
  const { id, title, author } = data;
  const card = `
      <div class="book-author--card" id="${id}">
        <p>${title}</p>
        <p>${author}</p>
        <button type="button"  data-remove-btn>Remove</button>
      </div>
  `;
  return card;
};

export default bookCardBuilder;