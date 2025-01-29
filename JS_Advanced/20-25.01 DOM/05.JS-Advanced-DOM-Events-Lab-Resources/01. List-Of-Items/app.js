function addItem() {
  //read
  const input = document.getElementById("newItemText");
  const ulEl = document.getElementById("items");
  //create
  const liEl = document.createElement("li");
  liEl.textContent = input.value;
  //append
  ulEl.appendChild(liEl);
  //reset
  input.value = "";
  //focusing
  input.focus();
}
