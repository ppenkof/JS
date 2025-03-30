import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";

import itemsService from "../api/itemsService.js";

const mainEl = document.querySelector("main");

export default async function tattooCreatePage() {
  //const tattooId = ctx.params.id; //here you can decide if user is logged!!!
  render(createTemplate(), mainEl);
}

function createTemplate() {
  return html`<section id="create">
    <div class="form">
      <h2>Add tattoo</h2>
      <form @submit=${addTattoo} class="create-form">
        <input type="text" name="type" id="type" placeholder="Tattoo Type" />
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
        <!--It have to be checked if have restriction for logged users-->
        <select id="user-type" name="user-type">
          <option>Select your role</option>
          <!--value="" disabled selected-->
          <option value="Tattoo Artist">Tattoo Artist</option>
          <option value="Tattoo Enthusiast">Tattoo Enthusiast</option>
          <option value="First Time in Tattoo">First Time in Tattoo</option>
          <option value="Tattoo Collector">Tattoo Collector</option>
        </select>
        <button type="submit">Add tattoo</button>
      </form>
    </div>
  </section>`;
}

async function addTattoo(e) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const tattooData = Object.fromEntries(formData);
  console.log(tattooData);
  if (Object.values(tattooData).some((val) => val === "")) {
    return alert("All fields are required!");
  }

  try {
    const result = await itemsService.create(tattooData);
    page.redirect("/dashboard");
  } catch (err) {
    alert(err.message);
  }
}
