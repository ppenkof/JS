import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import itemsService from "../api/itemsService.js";

const mainEl = document.querySelector("main");

export default async function droneEditPage(ctx) {
  const droneId = ctx.params.id;
  const drone = await itemsService.getById(droneId);
  console.log(drone);
console.log(droneId);
  render(editTemplate(drone), mainEl);
}

function editTemplate(drone) {
  console.log(drone);
  return html` <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
      <div class="form form-item">
        <h2>Edit Offer</h2>
        <form @submit=${(e) => editDrone(e, drone._id)} class="edit-form">
          <input
            type="text"
            name="model"
            id="model"
            placeholder="Drone Model"
            value=${drone.model}
          />
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            placeholder="Image URL"
            value=${drone.imageUrl}
          />
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Price"
            value=${drone.price}
          />
          <input
            type="number"
            name="weight"
            id="weight"
            placeholder="Weight"
            value=${drone.weight}
          />
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Phone Number for Contact"
            value=${drone.phone}
          />
          <input
            type="text"
            name="condition"
            id="condition"
            placeholder="Condition"
            value=${drone.condition}
          />
          <textarea
            name="description"
            id="description"
            placeholder="Description"
            .value=${drone.description}
          ></textarea>
          <button type="submit">Edit</button>
        </form>
      </div>
    </section>`;
}

async function editDrone(e, droneId) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const droneData = Object.fromEntries(formData);
  console.log(droneData);
  if (Object.values(droneData).some((val) => val === "")) {
    return alert("All fields are required!");
  }

  try {
    const result = await itemsService.update(droneId, droneData);

    page.redirect(`/details/${droneId}`);
  } catch (err) {
    alert(err.message);
  }
}
