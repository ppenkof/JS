import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import usersService from "../api/usersService.js";
import errorHandling from "../notification.js";

const mainEl = document.querySelector("main");

export default async function droneLoginPage() {
  render(loginTemplate(), mainEl);
}

function loginTemplate() {
  return html` <!-- Login Page (Only for Guest users) -->
    <section id="login">
      <div class="form">
        <h2>Login</h2>
        <form @submit=${loginUser} class="login-form">
          <input type="text" name="email" id="email" placeholder="email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <button type="submit">login</button>
          <p class="message">
            Not registered? <a href="/register">Create an account</a>
          </p>
        </form>
      </div>
    </section>`;
}

async function loginUser(e) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const userData = Object.fromEntries(formData);

  if (!userData.email || !userData.password) {
    page.redirect("/login");
    throw errorHandling("All fields are required!");
  }

  try {
    const result = await usersService.login(userData);
    page.redirect("/");
  } catch (error) {
    throw errorHandling(error.message);
  }
}
