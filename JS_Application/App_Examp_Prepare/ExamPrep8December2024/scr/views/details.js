import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { getToken, getUserId } from "../utils.js";
import { checkIsOwner } from "../utils.js";
import itemsService from "../api/itemsService.js";

const mainEl = document.querySelector("main");

export default async function droneDetailsPage(ctx) {
  const droneId = ctx.params.id;
  //const token = getToken();
  const drone = await itemsService.getById(droneId);
  const isOwner = checkIsOwner(drone);
  //const user = getUserId();
  // let isClick = await checkLikedroneByUser(droneId, user);
  // const likes = await likedroneByUser(droneId);

  render(detailsTemplate(drone, isOwner), mainEl);
}

function detailsTemplate(drone, isOwner) {
  return html`<!-- Details page -->
    <section id="details">
      <div id="details-wrapper">
        <div>
          <img id="details-img" src=${drone.imageUrl} alt="example1" />
          <p id="details-model">${drone.model}</p>
        </div>
        <div id="info-wrapper">
          <div id="details-description">
            <p class="details-price">${drone.price}</p>
            <p class="details-condition">${drone.condition}</p>
            <p class="details-weight">${drone.weight}</p>
            <p class="drone-description">${drone.description}</p>
            <p class="phone-number">${drone.phone}</p>
          </div>
          ${isOwner
            ? html` <!--Edit and Delete are only for creator-->
                <div class="buttons">
                  <a href="/edit/${drone._id}" id="edit-btn">Edit</a>
                  <a @click=${() => deleteDrone(drone._id)} id="delete-btn"
                    >Delete</a
                  >
                </div>`
            : null}
        </div>
      </div>
    </section>`;
}

async function deleteDrone(droneId) {
  const confirmDelete = confirm("Are you sure you want to delete this show?");

  if (confirmDelete) {
    try {
      await itemsService.deleteById(droneId);
      page.redirect("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  }
}
