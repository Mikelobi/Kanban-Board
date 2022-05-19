const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const appID = 'HqxG6qkpi3DhZGaAkW1w';
const endPoint = `${URL}/apps/${appID}/likes/`;
const postLike = async (item) => {
  const response = await fetch(endPoint, {
    method: 'POST',
    body: JSON.stringify({ item_id: item }),
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
  });
  return response.text();
};
const getLikes = async () => {
  const response = await fetch(endPoint);
  return response.json();
};
const updateLikes = (movie, resArray, movieLikes) => {
  resArray.forEach((element) => {
    if (element.item_id === movie.id) {
      movieLikes.innerHTML = `${element.likes} likes`;
    }
  });
};
export { postLike, getLikes, updateLikes };
