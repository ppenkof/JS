import { html, render } from "../../node_modules/lit-html/lit-html.js";
import itemsService from "../api/itemsService.js";

const mainEl = document.querySelector("main");

export default async function droneDashboardPage() {
  const drone = await itemsService.getAll();
  console.log(drone);
  render(dashboardTemplate(drone), mainEl);
}

function dashboardTemplate(drone) {
  return html`
    <!-- Dashboard page -->
    <h3 class="heading">Marketplace</h3>
    ${drone.length > 0
      ? html`
          <section id="dashboard"><!--s-->
            ${drone.map((s) => solutionTemplate(s))}
          </section>
        `
      : html` <!-- Display an h2 if there are no posts -->
              <h3 class="no-drones">No Drones Available</h3>`}
  `;
}
// it have to be checked if drone.objAtributes is correct
function solutionTemplate(drone) {
  return html` 
   <!-- Display a div with information about every post (if any)-->
   <div class="drone">
    <img src=${drone.imageUrl} alt="example1" />
    <h3 class="model">${drone.model}</h3>
    <div class="drone-info">
      <p class="price">${drone.price}</p>
      <p class="condition">${drone.condition}</p>
      <p class="weight">${drone.weight}</p>
    </div>
    <a class="details-btn" href="/details/${drone._id}">Details</a>
  </div>
  `;
}

