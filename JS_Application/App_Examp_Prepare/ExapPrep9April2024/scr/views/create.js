import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";

import itemsService from "../api/itemsService.js";

const mainEl = document.querySelector("main");

export default async function solutionCreatePage() {
  //const solutionId = ctx.params.id; //here you can decide if user is logged!!!
  render(createTemplate(), mainEl);
}

function createTemplate() {
  return html`
    <!-- Create Page (Only for logged-in users) -->
    <section id="create">
      <div class="form">
        <img class="border" src="/images/border.png" alt="" />
        <h2>Add Solution</h2>
        <form @submit=${addSolution} class="create-form">
          <input
            type="text"
            name="type"
            id="type"
            placeholder="Solution Type"
          />
          <input
            type="text"
            name="image-url"
            id="image-url"
            placeholder="Image URL"
          />
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            rows="2"
            cols="10"
          ></textarea>
          <textarea
            id="more-info"
            name="more-info"
            placeholder="more Info"
            rows="2"
            cols="10"
          ></textarea>
          <button type="submit">Add Solution</button>
        </form>
      </div>
    </section>
  `;
}

async function addSolution(e) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const solutionData = Object.fromEntries(formData);
  console.log(solutionData);
  if (Object.values(solutionData).some((val) => val === "")) {
    return alert("All fields are required!");
  }

  try {
    const result = await itemsService.create(solutionData);
    page.redirect("/dashboard");
  } catch (err) {
    alert(err.message);
  }
}
