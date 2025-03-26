import showView from "./utils.js";
import { updateNav } from "./utils.js";
import homePage from "./home.js";

const section = document.querySelector("#form-sign-up");
const form = section.querySelector("form");
form.addEventListener("submit", onSubmit);

export default function registerPage() {
  showView(section);
}

async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const email = formData.get("email");
  const password = formData.get("password");
  const rePassword = formData.get("repeatPassword");

  if (email?.length <= 0 || password?.length <= 0 || rePassword?.length <= 0) {
    alert("Please fill all fields!");
    return;
  }

  if (password != rePassword) {
    alert("Passwords must match");
    return;
  }

  register(email, password);
  updateNav();
  homePage();
}

async function register(email, password) {
  try {
    const url = "http://localhost:3030/users/register";
    console.log(url);
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response !== 200 || !response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const userData = await response.json();
    localStorage.setItem("user", JSON.stringify(userData));

  } catch (error) {
    alert(error.message);
  }
}
