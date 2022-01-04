const url = 'https://api.tvmaze.com/shows';
const key = 'CGPm9CVfAjvE2W0viDdC';
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

const getMovies = async () => {
  const response = await fetch(url);
  return response.json();
};

const postComments = async (itemId, username, comment) => {
  const response = await fetch(`${baseUrl}apps/${key}/comments`,
    {
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
  return response.json();
};

const getComments = async (itemid) => {
  const response = fetch(`${baseUrl}apps/${key}/comments?item_id=${itemid}`);
  return response.json();
};

export {
  getMovies,
  postComments,
  getComments,
};