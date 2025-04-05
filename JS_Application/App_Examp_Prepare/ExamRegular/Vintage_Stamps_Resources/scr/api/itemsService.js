import { get, post, put, del } from "./requester.js";
import { baseStampsUrl, baseBonusStampsUrl } from "../constants.js";
import { getUserId } from "../utils.js";

const userId = getUserId();

async function getAll() {
  return await get(`${baseStampsUrl}?sortBy=_createdOn%20desc`);
}

async function getById(stampId) {
  return await get(`${baseStampsUrl}/${stampId}`);
}

async function getByTitle(stampTitle) {
  return await get(
    `${baseStampsUrl}?where=title%20LIKE%20%22${stampTitle}%22`
  );
}

async function getLikesByUser(stampId, userId) {
  return await get(
    `${baseBonusStampsUrl}?where=stampId%3D%22${stampId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
}

async function getLikes(stampId) {
  return await get(
    `${baseBonusStampsUrl}?where=stampId%3D%22${stampId}%22&distinct=_ownerId&count`
  );
}

async function setLike(stampId) {
  return await post(`${baseBonusStampsUrl}`, { stampId });
}

async function create(stampData) {
  const { "image-url": imageUrl, ...otherData } = stampData;
  return await post(baseStampsUrl, { imageUrl, ...otherData });
}

async function update(stampId, stampData) {
  const { "image-url": imageUrl, ...otherData } = stampData;
  return await put(`${baseStampsUrl}/${stampId}`, { imageUrl, ...otherData });
}

async function deleteById(stampId) {
  await del(`${baseStampsUrl}/${stampId}`);
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
