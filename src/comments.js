import { getComments, getRes } from "./api.js";

const display = async (commentsSection, id) => {
  commentsSection.innerHTML = "";
  const data = await getComments(id);
  const myList = data.map((item) => {
    const listItems = `<p>${item.username}: ${item.comment}</p>`;
    return listItems;
  });
  commentsSection.innerHTML = myList;
};

const displayRes = async (reserveSection, id) => {
  reserveSection.innerHTML = "";
  const data = await getRes(id);
  const myList = data.map((item) => {
    const listItems = `<p>${item.username}: ${item.date_start}: ${item.date_end}</p>`;
    return listItems;
  });
  reserveSection.innerHTML = myList;
};

export { display, displayRes };
