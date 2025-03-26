import { html, render } from '../01.List-Towns/node_modules/lit-html/lit-html.js'//"https://unpkg.com/lit-html?module";

const inputEl = document.getElementById("towns");
const loadBtn = document.getElementById("btnLoadTowns");
const rootEl = document.getElementById("root");

loadBtn.addEventListener("click", showTowns);

function showTowns(e) {
    console.log('hi');
  e.preventDefault();
  const towns = inputEl.value.split(",").map((t) => t.trim());
  render(townsTemolate(towns), rootEl);
}
function townsTemolate(towns) {
  return html`
    <ul>
      ${towns.map((t) => html`<li>${t}</li>`)}
    </ul>
  `;
}
