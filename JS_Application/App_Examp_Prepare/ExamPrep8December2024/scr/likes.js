import itemsService from "./api/itemsService.js";
//check if user has liked this solution
export async function checkLikeSolutionByUser(solutionId, userId) {
  let isClick = false;
  let check = 0;
  try {
    check =  await itemsService.getLikesByUser(solutionId, userId);
    check > 0 ? (isClick = false) : (isClick = true);
  } catch (err) {
    alert(err.message);
  }
  return isClick;
}
//get all likes
export async function likeSolutionByUser(solutionId, userId) {
  let check = 0;
  try {
    check =  await itemsService.getLikes(solutionId);
  } catch (err) {
    alert(err.message);
  }
  return check;
}
