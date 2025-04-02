import { html, render } from "../../node_modules/lit-html/lit-html.js";

const mainEl = document.querySelector("main");

export default async function droneHomePage() {
  render(homeTemplate(), mainEl);
}

function homeTemplate() {
  return html`    
      <!-- Home page -->
      <section id="hero">
        <p>
          Discover the best deals on drones! Buy, sell, and trade top-quality drones with ease on Drone Deals - your
          trusted marketplace for all things drone.</p>
      </section>`;
}
