import { html, render } from "../../node_modules/lit-html/lit-html.js";
import itemsService from "../api/itemsService.js";

const mainEl = document.querySelector("main");

export default async function solutionDashboardPage() {
  const solution = await itemsService.getAll();
  render(dashboardTemplate(solution), mainEl);
}

function dashboardTemplate(solution) {
  return html`
    <h2>Collection</h2>

    ${solution.length > 0
      ? html`
          <section id="solution">
            ${solution.map((s) => solutionTemplate(s))}
          </section>
        `
      : html` <!-- Display an h2 if there are no posts -->
          <h2 id="no-solution">No Solutions Added.</h2>`}
  `;
}
// it have to be checked if solution.objAtributes is correct
function solutionTemplate(solution) {
  return html` <div class="solution">
    <img src=${solution.imageUrl} alt="example3" />
    <div class="solution-info">
      <h3 class="type">${solution.type}</h3>
      <p class="description">${solution.description}</p>
      <a class="details-btn" href="/details/${solution._id}">Learn More</a>
    </div>
  </div>`;
}
