import createPage from "./create.js";
import homePage from "./home.js";
import loginPage from "./login.js";
import registerPage from "./register.js";
import { updateNav } from "./utils.js";

const route = {
  "/": homePage,
  "/login": loginPage,
  "/logout": logout,
  "/create": createPage,
  "/register": registerPage,
};

document.querySelector("nav").addEventListener("click", onNavigate);
document
  .querySelector("#add-movie-button a")
  .addEventListener("click", onNavigate);

function onNavigate(event) {
  if (event.target.tagName == "A" || event.target.href?.length) {
    event.preventDefault();
    const url = new URL(event.target.href);

    const view = route[url.pathname];
    if (typeof view === "function") {
      view();
    }
  }
}

function logout() {
  localStorage.removeItem("user");
  updateNav();
}

//on init
updateNav();
homePage(); //route["/"]();
