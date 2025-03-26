import showView from "./utils.js";
import {detailsPage}  from "./details.js";

const section = document.querySelector("#home-page");
const catalog = section.querySelector(
  "#movie .card-deck.d-flex.justify-content-center"
);
//debugger;
catalog.addEventListener("click", (event) => {
console.log(event.target.tagName);
  if (event.target.tagName == "BUTTON") {
    event.preventDefault();
    const id = event.target.dataset.id;
    detailsPage(id);
  }
});

export default function homePage() {
 showView(section);
}

async function displayMovies() {
    catalog.replaceChildren(spinner());
  
    const movies = await getMovies();
  
    catalog.replaceChildren(...movies.map(createMoviePreview));
  }
  
  function createMoviePreview(movie) {
    const element = document.createElement("li");
    element.className = "card mb-4";
    element.innerHTML = `
      <img class="card-img-top" src="${movie.img}"
          alt="Card image cap" width="400">
      <div class="card-body">
          <h4 class="card-title">${movie.title}</h4>
          <a href="/details/${movie._id}">
              <button data-id="${movie._id}" type="button" class="btn btn-info">Details</button>
          </a>
      </div>
      <div class="card-footer">
      </div>`;
  
    return element;
  }
  
  async function getMovies() {
    const res = await fetch("http://localhost:3030/data/movies");
    const data = await res.json();
  
    return data;
  }