import itemsService from "./api/itemsService.js";
//check if user has liked this item
export async function checkLikeStampByUser(stampId, userId) {
  let isClick = false;
  let check = 0;
  try {
    check =  await itemsService.getLikesByUser(stampId, userId);
    check > 0 ? (isClick = false) : (isClick = true);
  } catch (err) {
    alert(err.message);
  }
  return isClick;
}
//get all likes
export async function likeStampByUser(stampId, userId) {
  let check = 0;
  try {
    check =  await itemsService.getLikes(stampId);
  } catch (err) {
    alert(err.message);
  }
  return check;
}
