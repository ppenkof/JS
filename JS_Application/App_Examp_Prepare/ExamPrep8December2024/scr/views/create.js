import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import errorHandling from "../notification.js";
import itemsService from "../api/itemsService.js";

const mainEl = document.querySelector("main");
//const mainEl = document.getElementById("main-element");

export default async function droneCreatePage() {
  render(createTemplate(), mainEl);
}

function createTemplate() {
  return html`
    <!-- Create Page (Only for logged-in users) -->
    <section id="create">
      <div class="form form-item">
        <h2>Add Drone Offer</h2>
        <form @submit=${addDrone} class="create-form">
          <input
            type="text"
            name="model"
            id="model"
            placeholder="Drone Model"
          />
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            placeholder="Image URL"
          />
          <input type="number" name="price" id="price" placeholder="Price" />
          <input type="number" name="weight" id="weight" placeholder="Weight" />
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Phone Number for Contact"
          />
          <input
            type="text"
            name="condition"
            id="condition"
            placeholder="Condition"
          />
          <textarea
            name="description"
            id="description"
            placeholder="Description"
          ></textarea>
          <button type="submit">Add</button>
        </form>
      </div>
    </section>`;
}

async function addDrone(e) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const droneData = Object.fromEntries(formData);
  console.log(droneData);
  if (Object.values(droneData).some((val) => val === "")) {
    throw errorHandling("All fields are required!");
  }

  try {
    const result = await itemsService.create(droneData);
    page.redirect("/dashboard");
  } catch (err) {
    throw errorHandling(err.message);
  }
}
