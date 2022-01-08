import { getComments, getLikes, getReservation } from './api.js';

const display = async (commentsSection, id) => {
  commentsSection.innerHTML = '';
  const data = await getComments(id);
  let listItems = '';
  data.forEach((item) => {
    listItems += `<p class="user-com">${item.username}: ${item.comment}</p>`;
  });
  commentsSection.innerHTML = listItems;
  const myelement = document.createElement('h3');
  myelement.textContent = `${commentsSection.childElementCount} Comments`;
  commentsSection.insertBefore(myelement, commentsSection.firstChild);
};

const displayRes = async (reserveSection, id) => {
  reserveSection.innerHTML = '';
  const dat = await getReservation(id);
  let listItems = '';
  if (dat.length !== 0) {
    dat.forEach((item) => {
      listItems += `<p>${item.username}: Startdate: ${item.date_start} - Enddate: ${item.date_end}</p>`;
    });
    reserveSection.innerHTML = listItems;
  }

  const myelement = document.createElement('h3');
  myelement.textContent = `${reserveSection.childElementCount}  Reservation(s)`;
  reserveSection.insertBefore(myelement, reserveSection.firstChild);
};

const displayLikes = async (like, id) => {
  const data = await getLikes();
  data.forEach((item) => {
    if (id === item.item_id) {
      like.innerHTML = `<p>${item.likes} likes</p>`;
    }
  });
};

export { display, displayRes, displayLikes };
