import { getComments, getReservation } from "./api.js";

const display = async (commentsSection, id) => {
  commentsSection.innerHTML = "";
  const data = await getComments(id);
  let listItems = '';
  data.forEach((item) => {
    listItems += `<p>${item.username}: ${item.comment}</p>`;
   
  });
  commentsSection.innerHTML = listItems;
};

const displayRes = async (reserveSection, id) => {
  reserveSection.innerHTML = "";
  const dat = await getReservation(id);
  console.log(dat);
  let listItems = '';
  dat.forEach((item) => {
    listItems += `<p>${item.username}: ${item.start_date}</p>`;
  });
  commentsSection.innerHTML = listItems;
};

export { display, displayRes };
