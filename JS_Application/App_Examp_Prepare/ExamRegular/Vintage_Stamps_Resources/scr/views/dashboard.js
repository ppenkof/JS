import { html, render } from "../../node_modules/lit-html/lit-html.js";
import itemsService from "../api/itemsService.js";

const mainEl = document.querySelector("main");

export default async function stampDashboardPage() {
  const stamps = await itemsService.getAll();
  console.log(stamps); // it have to check totoo.objAtributes
  render(dashboardTemplate(stamps), mainEl);
}

function dashboardTemplate(stamps) {
  return html`
    <!-- Dashboard page -->
    <h2>Collection</h2>
    ${stamps.length > 0
      ? html`
          <section id="collection">
            ${stamps.map((s) => stampTemplate(s))}
          </section>
        `
      : html`<!-- Display an h2 if there are no posts -->
          <h2 id="no-stamp">No Stamps Added.</h2>`}
  `;
}
 
function stampTemplate(stamp) {
  return html`
    <!-- Display a div with information about every post (if any)-->
    <div class="stamp">
      <img src=${stamp.imageUrl} alt="example1" />
      <div class="stamp-info">
        <h3 class="name">${stamp.name}</h3>
        <p class="year-description">
          Year of oldest stamps - <span class="year">${stamp.year}</span>
        </p>
        <a class="learn-more-btn" href="/details/${stamp._id}">Learn More</a>
      </div>
    </div>
  `;
}
