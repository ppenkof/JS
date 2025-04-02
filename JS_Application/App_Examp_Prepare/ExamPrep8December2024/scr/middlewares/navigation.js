import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { getToken, removeUserData } from "../utils.js";
import usersService from "../api/usersService.js";

const headerEl = document.querySelector("header");

export default function droneNavigation(ctx, next) {
  //removeUserData();
  const token = getToken();
  render(navigationTemplate(token), headerEl);
  next();
}

function navigationTemplate(token) {
  return html`
    <!-- Navigation -->
    <a id="logo" href="/"><img id="logo" src="/images/logo2.png" alt="img" /></a>
    <nav>
      <div>
        <a href="/dashboard">Marketplace</a>
      </div>
  
      ${token
        ? html `<!-- Logged-in users -->
        <div class="user">
          <a href="/create">Sell</a>
          <a @click=${logoutUser}>Logout</a>
        </div>`
        : html `<!-- Guest users -->
        <div class="guest">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>`}
    </nav>
  `;
}

async function logoutUser() {
  try {
    await usersService.logout();
    page.redirect("/");
  } catch (err) {
    removeUserData();
    alert(err.message);
  }
  
}
