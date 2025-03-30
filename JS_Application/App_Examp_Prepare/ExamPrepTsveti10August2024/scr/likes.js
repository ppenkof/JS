import itemsService from "./api/itemsService.js";

export async function checkLikeTattooByUser(tattooId, userId) {
  let isClick = false;
  let check = 0;
  try {
    check =  await itemsService.getLikesByUser(tattooId, userId);
    check > 0 ? (isClick = false) : (isClick = true);
  } catch (err) {
    alert(err.message);
  }
  return isClick;
}

export async function likeTattooByUser(tattooId, userId) {
  let check = 0;
  try {
    check =  await itemsService.getLikes(tattooId);
  } catch (err) {
    alert(err.message);
  }
  return check;
}
