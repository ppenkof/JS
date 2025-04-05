import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { getToken, getUserId } from "../utils.js";
import { checkIsOwner } from "../utils.js";
import itemsService from "../api/itemsService.js";
import { checkLikeTattooByUser, likeTattooByUser } from "../likes.js";

const mainEl = document.querySelector("main");

export default async function tattooDetailsPage(ctx) {

  const tattooId = ctx.params.id;
  const token = getToken();
  const tattoo = await itemsService.getById(tattooId);
  const isOwner = checkIsOwner(tattoo);
  const user = getUserId();
  let isClick = await checkLikeTattooByUser(tattooId, user);
  const likes = await likeTattooByUser(tattooId);

  render(detailsTemplate(tattoo, isOwner, token, isClick, likes), mainEl);
}

function detailsTemplate(tattoo, isOwner, token, isClick, likes) {
  return html`
    <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src=${tattoo.imageUrl} alt="example1" />
        <div>
          <div id="info-wrapper">
            <p id="details-type">${tattoo.type}</p>
            <div id="details-description">
              <p id="user-type">${tattoo["user-type"] || tattoo.userType}</p>
              <p id="description">${tattoo.description}</p>
            </div>
            <h3>Like tattoo:<span id="like">${likes}</span></h3>
            <div id="action-buttons">
              ${isOwner
                ? html` <!--Edit and Delete are only for creator-->
                      <a href="/edit/${tattoo._id}" id="edit-btn">Edit</a>
                      <a
                        @click=${() => deleteTattoo(tattoo._id)}
                        id="delete-btn"
                        >Delete</a
                      >
                    </div>`
                : token && isClick
                ? html` <!--Bonus - Only for logged-in users ( not authors )-->
                    <a @click=${() => likeTattoo(tattoo._id)} id="like-btn"
                      >Like</a
                    >`
                : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

async function likeTattoo(tattooId) {
  try {
    await itemsService.setLike(tattooId);
  } catch (error) {
    alert(err.message);
  }
  page.redirect(`/details/${tattooId}`);
}

async function deleteTattoo(tattooId) {
  const confirmDelete = confirm("Are you sure you want to delete this show?");

  if (confirmDelete) {
    try {
      await itemsService.deleteById(tattooId);
      page.redirect("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  }
}
