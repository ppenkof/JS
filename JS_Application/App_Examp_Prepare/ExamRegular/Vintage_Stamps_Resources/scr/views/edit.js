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
  return html`<
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
      <div class="form">
        <h2>Edit Post Stamp</h2>
        <form @submit=${(e) => editStamp(e, stamp._id)} class="edit-form">
          <input
            type="text"
            name="name-input"
            id="name"
            placeholder="Stamp Name"
            value=${stamp.name}
          />
          <input
            type="text"
            name="image-url-input"
            id="image-url"
            placeholder="Image URL"
            value=${stamp.imageUrl}
          />
          <input
            type="number"
            id="year-input"
            name="year-input"
            placeholder="Year"
            value=${stamp.year}
          />
          <textarea
            id="more-info"
            name="more-info-textarea"
            placeholder="More Info"
            rows="8"
            cols="10"
            .value=${stamp.learnMore}
          ></textarea>
          <!-- it have to be checked obj.properties -->
          <button type="submit">Edit</button>
        </form>
      </div>
    </section> `;
}

async function editStamp(e, stampId) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const stampData = Object.fromEntries(formData);
  console.log(stampData);
  if (Object.values(stampData).some((val) => val === "")) {
    return alert("All fields are required!");
  }

  try {
    const result = await itemsService.update(stampId, stampData);

    page.redirect(`/details/${stampId}`);
  } catch (err) {
    alert(err.message);
  }
}
