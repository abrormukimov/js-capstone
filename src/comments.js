import { getComments } from './api.js';

const display = async (commentsSection, id) => {
  commentsSection.innerHTML = '';
  const data = await getComments(id);
  const myList = data.map((item) => {
    const listItems = `<p>${item.username}: ${item.comment}</p>`;
    return listItems;
  });
  commentsSection.innerHTML = myList;
};

export {
  display,
}
