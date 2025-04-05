import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { getToken, getUserId } from "../utils.js";
import { checkIsOwner } from "../utils.js";
import itemsService from "../api/itemsService.js";
import { checkLikeStampByUser, likeStampByUser } from "../likes.js";

const mainEl = document.querySelector("main");

export default async function stampDetailsPage(ctx) {
  const stampId = ctx.params.id;
  const token = getToken();
  const stamp = await itemsService.getById(stampId);
  const isOwner = checkIsOwner(stamp);
  const user = getUserId();
  let isClick = await checkLikeStampByUser(stampId, user);
  const likes = await likeStampByUser(stampId);

  render(detailsTemplate(stamp, isOwner, token, isClick, likes), mainEl);
}

function detailsTemplate(stamp, isOwner, token, isClick, likes) {
  return html`
          <!-- Details page -->
          <section id="details">
        <div id="details-wrapper">
          <img id="details-img" src=${stamp.imageUrl} alt="example1" />
          <div>
            <p id="details-name">${stamp.name}</p>
            <div id="info-wrapper">
              <div id="details-year-description">
                <p id="year-description">
                  Year of oldest stamps - <span id="year">${stamp.year}</span> 
                </p>
                <p id="more-info">${stamp.learnMore}
                </p>
              </div>
            </div>
            <h3>Stamp total likes:<span id="likes">${likes}</span></h3>

            <!--Edit and Delete are only for creator-->
            <div id="action-buttons">
              ${
                isOwner
                  ? html` <!--Edit and Delete are only for creator-->
                      <a href="/edit/${stamp._id}" id="edit-btn">Edit</a>
                      <a @click=${() => deleteStamp(stamp._id)} id="delete-btn"
                        >Delete</a
                      >`
                  : token && isClick
                  ? html` <!--Bonus - Only for logged-in users ( not authors )-->
                      <a @click=${() => likeStamp(stamp._id)} id="like-btn"
                        >Like</a
                      >`
                  : null
              }
            </div>
          </div>
        </div>
    </section>`;
}

async function likeStamp(stampId) {
  try {
    await itemsService.setLike(stampId);
  } catch (error) {
    alert(err.message);
  }
  page.redirect(`/details/${stampId}`);
}

async function deleteStamp(stampId) {
  const confirmDelete = confirm("Are you sure you want to delete this show?");

  if (confirmDelete) {
    try {
      await itemsService.deleteById(stampId);
      page.redirect("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  }
}
