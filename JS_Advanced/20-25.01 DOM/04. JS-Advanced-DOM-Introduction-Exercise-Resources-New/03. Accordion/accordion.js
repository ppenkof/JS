function toggle() {
  let button = document.getElementsByClassName("button")[0];
  //console.log(button);
  let text = document.getElementById("extra");
  //console.log(text);
  button.textContent = button.textContent === "More" ? "Less" : "More";
  text.style.display = text.style.display === "none" || text.style.display === "" ? "block" : "none";
}
