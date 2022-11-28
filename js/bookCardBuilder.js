/* eslint-disable linebreak-style */
const bookCardBuilder = (data) => {
  const { title, author } = data;
  const card = `
  <div class="book-author--card">
        <p>${title}</p>
        <p>${author}</p>
        <button type="button" data-remove>Remove</button>
      </div>
  `;
  return card;
};

export default bookCardBuilder;