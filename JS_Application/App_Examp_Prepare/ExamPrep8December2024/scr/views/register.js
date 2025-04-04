import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import usersService from "../api/usersService.js";
import errorHandling from "../notification.js";

const mainEl = document.querySelector("main");

export default async function droneRegisterPage() {
  render(registerTemplate(), mainEl);
}

function registerTemplate() {
  return html` <!-- Register Page (Only for Guest users) -->
    <section id="register">
      <div class="form">
        <h2>Register</h2>
        <form @submit=${registerUser} class="register-form">
          <input
            type="text"
            name="email"
            id="register-email"
            placeholder="email"
          />
          <input
            type="password"
            name="password"
            id="register-password"
            placeholder="password"
          />
          <input
            type="password"
            name="re-password"
            id="repeat-password"
            placeholder="repeat password"
          />
          <button type="submit">register</button>
          <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
      </div>
    </section>`;
}

async function registerUser(e) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const userData = Object.fromEntries(formData);

  if (!userData.email || !userData.password || !userData["re-password"]) {
    throw errorHandling("All fields are required!");
  }

  if (userData["password"] !== userData["re-password"]) {
    throw errorHandling("Passwords don\'t match!");
  }

  try {
    const result = await usersService.register(userData);
    page.redirect("/");
  } catch (err) {
    throw errorHandling(err.message);
  }
}
