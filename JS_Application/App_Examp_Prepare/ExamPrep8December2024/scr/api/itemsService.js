import { get, post, put, del } from "./requester.js";
import { baseDronesUrl} from "../constants.js";
import { getUserId } from "../utils.js";

const userId = getUserId();

async function getAll() {
  return await get(`${baseDronesUrl}?sortBy=_createdOn%20desc`);
}

async function getById(droneId) {
  return await get(`${baseDronesUrl}/${droneId}`);
}

// async function getByTitle(droneTitle) {
//   return await get(
//     `${baseDronesUrl}?where=title%20LIKE%20%22${droneTitle}%22`
//   );
// }

// async function getLikesByUser(droneId, userId) {
//   return await get(
//     `${baseBonusLikeUrl}?where=droneId%3D%22${droneId}%22%20and%20_ownerId%3D%22${userId}%22&count`
//   );
// }

// async function getLikes(droneId) {
//   return await get(
//     `${baseBonusLikeUrl}?where=droneId%3D%22${droneId}%22&distinct=_ownerId&count`
//   );
// }

// async function setLike(droneId) {
//   return await post(`${baseBonusLikeUrl}`, { droneId });
// }

async function create(droneData) {
  const {
    ...otherData
  } = droneData;
  
  return await post(baseDronesUrl, {...otherData})//{ imageUrl, ...otherData });
}

async function update(droneId, droneData) {
  const {
    ...otherData
  } = droneData;

  return await put(`${baseDronesUrl}/${droneId}`, {...otherData})//{ imageUrl, learnMore, ...otherData});
}

async function deleteById(droneId) {
  await del(`${baseDronesUrl}/${droneId}`);
}

const itemsService = {
  getAll,
  getById,
  //getByTitle,
  create,
  update,
  deleteById,
  // getLikes,
  // getLikesByUser,
  // setLike,
};
export default itemsService;
