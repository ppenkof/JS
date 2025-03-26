const view =[...document.querySelectorAll(".view-section")];

function hideAllViews() {
  view.forEach((v) => (v.style.display = "none"));
}

export default function showView(section) {
  hideAllViews();
  section.style.display = "block";
}

export function spinner() {
  const element = document.createElement('p');
  element.innerHTML = 'Loading &hellip;';

  return element;
}

export function updateNav() {

  const user = JSON.parse(localStorage.getItem('user'));
  //console.log(localStorage.getItem('user'));

  const userNavEl = document.querySelectorAll(".user");
  const guestNavEl = document.querySelectorAll(".guest");
  const message = document.getElementById("welcome-msg");

  if (user) {
    //show user
    userNavEl.forEach((e) => (e.style.display = "inline-block"));
    //hide guest
    guestNavEl.forEach((e) => (e.style.display = "none"));
    //welcome user
    message.textContent = `Welcome, ${user.email}`;
  } else {
    //hide user
    userNavEl.forEach((e) => (e.style.display = "none"));
    //show guest
    guestNavEl.forEach((e) => (e.style.display = "inline-block"));
    message.textContent = "";
  }
}
