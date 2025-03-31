import { get, post, put, del } from "./requester.js";
import { baseTattoosUrl, baseBonusTattoosUrl } from "../constants.js";
import { getUserId } from "../utils.js";

const userId = getUserId();

async function getAll() {
  return await get(`${baseTattoosUrl}?sortBy=_createdOn%20desc`);
}

async function getById(tattooId) {
  return await get(`${baseTattoosUrl}/${tattooId}`);
}

async function getByTitle(tattooTitle) {
  return await get(
    `${baseTattoosUrl}?where=title%20LIKE%20%22${tattooTitle}%22`
  );
}

async function getLikesByUser(tattooId, userId) {
  return await get(
    `${baseBonusTattoosUrl}?where=tattooId%3D%22${tattooId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
}

async function getLikes(tattooId) {
  return await get(
    `${baseBonusTattoosUrl}?where=tattooId%3D%22${tattooId}%22&distinct=_ownerId&count`
  );
}

async function setLike(tattooId) {
  return await post(`${baseBonusTattoosUrl}`, { tattooId });
}

async function create(tattooData) {
  const { "image-url": imageUrl, ...otherData } = tattooData;
  return await post(baseTattoosUrl, { imageUrl, ...otherData });
}

async function update(tattooId, tattooData) {
  const { "image-url": imageUrl, ...otherData } = tattooData;
  return await put(`${baseTattoosUrl}/${tattooId}`, { imageUrl, ...otherData });
}

async function deleteById(tattooId) {
  await del(`${baseTattoosUrl}/${tattooId}`);
}

const itemsService = {
  getAll,
  getById,
  getByTitle,
  create,
  update,
  deleteById,
  getLikes,
  getLikesByUser,
  setLike,
};
export default itemsService;
