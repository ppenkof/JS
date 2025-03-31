import { get, post, put, del } from "./requester.js";
import { baseSolutionsUrl, baseBonusLikeUrl } from "../constants.js";
import { getUserId } from "../utils.js";

const userId = getUserId();

async function getAll() {
  return await get(`${baseSolutionsUrl}?sortBy=_createdOn%20desc`);
}

async function getById(solutionId) {
  return await get(`${baseSolutionsUrl}/${solutionId}`);
}

async function getByTitle(solutionTitle) {
  return await get(
    `${baseSolutionsUrl}?where=title%20LIKE%20%22${solutionTitle}%22`
  );
}

async function getLikesByUser(solutionId, userId) {
  return await get(
    `${baseBonusLikeUrl}?where=solutionId%3D%22${solutionId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
}

async function getLikes(solutionId) {
  return await get(
    `${baseBonusLikeUrl}?where=solutionId%3D%22${solutionId}%22&distinct=_ownerId&count`
  );
}

async function setLike(solutionId) {
  return await post(`${baseBonusLikeUrl}`, { solutionId });
}

async function create(solutionData) {
  const { "image-url": imageUrl, ...otherData } = SolutionData;
  return await post(baseSolutionsUrl, { imageUrl, ...otherData });
}

async function update(solutionId, solutionData) {
  const { "image-url": imageUrl, ...otherData } = solutionData;
  return await put(`${baseSolutionsUrl}/${solutionId}`, {
    imageUrl,
    ...otherData,
  });
}

async function deleteById(solutionId) {
  await del(`${baseSolutionsUrl}/${solutionId}`);
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
