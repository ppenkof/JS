function addItem() {
  //read elements
  const inputEl = document.getElementById("newItemText");
  const ulEl = document.getElementById("items");
//debugger;
  //create elements
  const liEl = document.createElement("li");
  liEl.textContent = inputEl.value;

  //create delete element
  const deleteBtn = document.createElement("a");
  deleteBtn.href = "#";
  deleteBtn.textContent = "[Delete]";

  //Add event listener to the Delete Button
  deleteBtn.addEventListener("click", (event) => {
    //delete by reference
    liEl.remove();

    //or 2nd variant delete by parent
    //event.currentTarget.parentElement.remove();
  });

  //attach Delete button to li element
  liEl.appendChild(deleteBtn);

  //append element
  ulEl.appendChild(liEl);

  //reset value
  inputEl.value = "";

  //focusing
  inputEl.focus();
}
