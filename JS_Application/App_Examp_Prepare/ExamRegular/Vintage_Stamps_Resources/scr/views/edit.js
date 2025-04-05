import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import itemsService from "../api/itemsService.js";

const mainEl = document.querySelector("main");

export default async function tattooEditPage(ctx) {
  const tattooId = ctx.params.id;
  const tattoo = await itemsService.getById(tattooId);
  render(editTemplate(tattoo), mainEl);
}

function editTemplate(tattoo) {
  return html`<section id="edit">
    <div class="form">
      <h2>Edit tattoo</h2>
      <form @submit=${(e) => editTattoo(e, tattoo._id)} class="edit-form">
        <input
          type="text"
          name="type"
          id="type"
          placeholder="Tattoo Type"
          value=${tattoo.type}
        />
        <input
          type="text"
          name="image-url"
          id="image-url"
          placeholder="Image URL"
          value=${tattoo.imageUrl}
        />
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          rows="2"
          cols="10"
          .value=${tattoo.description}
        ></textarea>
        <select
          id="user-type"
          name="user-type"
          .value=${tattoo["user-type"] || tattoo.userType}
        >
          <option value="" disabled selected>Select your role</option>
          <!---->
          <option value="Tattoo Artist">Tattoo Artist</option>
          <option value="Tattoo Enthusiast">Tattoo Enthusiast</option>
          <option value="First Time in Tattoo">First Time in Tattoo</option>
          <option value="Tattoo Collector">Tattoo Collector</option>
        </select>
        <button type="submit">Edit</button>
      </form>
    </div>
  </section>`;
}

async function editTattoo(e, tattooId) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const tattooData = Object.fromEntries(formData);
  console.log(tattooData);
  if (Object.values(tattooData).some((val) => val === "")) {
    return alert("All fields are required!");
  }

  try {
    const result = await itemsService.update(tattooId, tattooData);

    page.redirect(`/details/${tattooId}`);
  } catch (err) {
    alert(err.message);
  }
}
