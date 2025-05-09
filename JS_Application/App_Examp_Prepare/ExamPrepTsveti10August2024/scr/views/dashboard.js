import { html, render } from "../../node_modules/lit-html/lit-html.js";
import itemsService from "../api/itemsService.js";

const mainEl = document.querySelector("main");

export default async function tattooDashboardPage() {
  const tattoos = await itemsService.getAll();
  //console.log(tattoos); // it have to check totoo.objAtributes
  render(dashboardTemplate(tattoos), mainEl);
}

function dashboardTemplate(tattoos) {
  return html`
    <h2>Collection</h2>

    ${tattoos.length > 0
      ? html`
          <section id="tattoos">
            ${tattoos.map((s) => tattooTemplate(s))}
          </section>
        `
      : html` <h2 id="no-tattoo">
          Collection is empty, be the first to contribute
        </h2>`}
  `;
}
// it have to be checked if totoo.objAtributes is correct
function tattooTemplate(tattoo) {

  return html`<div class="tattoo">
    <img src=${tattoo.imageUrl} alt="example1" />
    <div class="tattoo-info">
      <h3 class="type">${tattoo.type}</h3>
      <span>Uploaded by </span>
      <p class="user-type">${tattoo.userType || tattoo["user-type"]}</p>
      <a class="details-btn" href="/details/${tattoo._id}">Learn More</a>
    </div>
  </div>`;
}
