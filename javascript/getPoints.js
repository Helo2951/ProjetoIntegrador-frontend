export async function getPoints(id) {
  const response = await fetch(
    `https://paranaguatour-api.onrender.com/points/${id}`
  );
  const data = await response.json();
  return data;
}
export async function getAllPoints() {
  const response = await fetch(
    `https://paranaguatour-api.onrender.com/points`
  );
  const data = await response.json();
  return data;
}
export async function getComments(id) {
  const response = await fetch(
    `https://paranaguatour-api.onrender.com/comments/${id}`
  );
  const data = await response.json();
  return data;
}
export async function getUsers(user_id) {
  const response = await fetch(
    `https://paranaguatour-api.onrender.com/users/${user_id}`
  );
  const data = await response.json();
  return data;
}

export async function getImages(images_id) {
  const response = await fetch(
    `https://paranaguatour-api.onrender.com/images/${images_id}`
  );
  const data = await response.json();
  return data;
}
