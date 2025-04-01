import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import itemsService from "../api/itemsService.js";

const mainEl = document.querySelector("main");

export default async function solutionEditPage(ctx) {
  const solutionId = ctx.params.id;
  const solution = await itemsService.getById(solutionId);
  render(editTemplate(solution), mainEl);
}

function editTemplate(solution) {
  //console.log(solution);
  return html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
      <div class="form">
        <img class="border" src="./images/border.png" alt="" />
        <h2>Edit Solution</h2>
        <form @submit=${(e) => editSolution(e, solution._id)} class="edit-form">
          <input
            type="text"
            name="type"
            id="type"
            placeholder="Solution Type"
            value=${solution.type}
          />
          <input
            type="text"
            name="image-url"
            id="image-url"
            placeholder="Image URL"
            value=${solution.imageUrl}
          />
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            rows="2"
            cols="10"
            .value=${solution.description}
          ></textarea>
          <textarea
            id="more-info"
            name="more-info"
            placeholder="more Info"
            rows="2"
            cols="10"
            .value=${solution.moreInfo || solution["more-info"]}
          ></textarea>
          <button type="submit">Edit</button>
        </form>
      </div>
    </section>`;
}

async function editSolution(e, solutionId) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const solutionData = Object.fromEntries(formData);
  console.log(solutionData);
  if (Object.values(solutionData).some((val) => val === "")) {
    return alert("All fields are required!");
  }

  try {
    const result = await itemsService.update(solutionId, solutionData);

    page.redirect(`/details/${solutionId}`);
  } catch (err) {
    alert(err.message);
  }
}
