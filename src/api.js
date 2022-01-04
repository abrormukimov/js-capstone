const url = "https://api.tvmaze.com/shows";
const key = "CGPm9CVfAjvE2W0viDdC";
const baseUrl =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/";

const getMovies = async () => {
  const response = await fetch(url);
  return response.json();
};

const postComments = async (itemId, username, comment) => {
  const response = await fetch(`${baseUrl}${key}/comments`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      item_id: itemId,
      username,
      comment,
    }),
  });
  return response.text();
};
const postReservations = async (itemId, username, date_start, date_end) => {
  const response = await fetch(`${baseUrl}${key}/reservations`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      item_id: itemId,
      username,
      date_start,
      date_end,
    }),
  });
  return response.text();
};

const getComments = async (itemid) => {
  const response = await fetch(`${baseUrl}${key}/comments?item_id=${itemid}`);
  return response.json();
};
const getRes = async (itemid) => {
  const response = await fetch(
    `${baseUrl}${key}/reservations?item_id=${itemid}`
  );
  return response.json();
};

export { getMovies, postComments, getComments, getRes, postReservations };
