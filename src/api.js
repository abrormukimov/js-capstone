const url = 'https://api.tvmaze.com/shows';
const key = 'CGPm9CVfAjvE2W0viDdC';
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const getMovies = async () => {
  const response = await fetch(url);
  return response.json();
};

const postComments = async (itemId, username, comment) => {
  const response = await fetch(`${baseUrl}${key}/comments`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: itemId,
      username,
      comment,
    }),
  });
  return response.text();
};

const getComments = async (itemid) => {
  const response = await fetch(`${baseUrl}${key}/comments?item_id=${itemid}`);
  return response.json();
};

const postReservations = async (itemId, user, dateStart, dateEnd) => {
  const response = await fetch(`${baseUrl}${key}/reservations`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: itemId,
      username: user,
      date_start: dateStart,
      date_end: dateEnd,
    }),
  });
  return response.text();
};

const getReservation = async (itemid) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CGPm9CVfAjvE2W0viDdC/reservations?item_id=${itemid}`);
  return response.json();
};

const postLikes = async (itemId) => {
  const response = await fetch(`${baseUrl}${key}/likes`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: itemId,
    }),
  });
  return response.text();
};

const getLikes = async () => {
  const response = await fetch(`${baseUrl}${key}/likes`);
  return response.json();
};

export {
  getMovies,
  postComments,
  getComments,
  getReservation,
  postReservations,
  getLikes,
  postLikes,
};
