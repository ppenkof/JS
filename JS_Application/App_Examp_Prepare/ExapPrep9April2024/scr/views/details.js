import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { getToken, getUserId } from "../utils.js";
import { checkIsOwner } from "../utils.js";
import itemsService from "../api/itemsService.js";
import { checkLikeSolutionByUser, likeSolutionByUser } from "../likes.js";

const mainEl = document.querySelector("main");

export default async function solutionDetailsPage(ctx) {
  const solutionId = ctx.params.id;
  const token = getToken();
  const solution = await itemsService.getById(solutionId);
  const isOwner = checkIsOwner(solution);
  const user = getUserId();
  let isClick = await checkLikeSolutionByUser(solutionId, user);
  const likes = await likeSolutionByUser(solutionId);

  render(detailsTemplate(solution, isOwner, token, isClick, likes), mainEl);
}

function detailsTemplate(solution, isOwner, token, isClick, likes) {
  return html` <!-- Details page -->
    <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src=${solution.imageUrl} alt="example1" />
        <div>
          <p id="details-type">${solution.type}</p>
          <div id="info-wrapper">
            <div id="details-description">
              <p id="description">${solution.description}</p>
              <p id="more-info">
                ${solution.learnMore || solution["more-info"]}
                <!--It have to be verified-->
              </p>
            </div>
          </div>
          <h3>Like Solution:<span id="like">${likes}</span></h3>
          <div id="action-buttons">
            ${isOwner
              ? html` <!--Edit and Delete are only for creator-->
                        <a href="/edit/${solution._id}" id="edit-btn">Edit</a>
                        <a
                          @click=${() => deleteSolution(solution._id)}
                          id="delete-btn"
                          >Delete</a
                        >
                      </div>`
              : token && isClick
              ? html` <!--Bonus - Only for logged-in users ( not authors )-->
                  <a @click=${() => likeSolution(solution._id)} id="like-btn"
                    >Like</a
                  >`
              : null}
          </div>
        </div>
      </div>
    </section>`;
}

async function likeSolution(solutionId) {
  try {
    await itemsService.setLike(solutionId);
  } catch (error) {
    alert(err.message);
  }
  page.redirect(`/details/${solutionId}`);
}

async function deleteSolution(solutionId) {
  const confirmDelete = confirm("Are you sure you want to delete this show?");

  if (confirmDelete) {
    try {
      await itemsService.deleteById(solutionId);
      page.redirect("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  }
}
