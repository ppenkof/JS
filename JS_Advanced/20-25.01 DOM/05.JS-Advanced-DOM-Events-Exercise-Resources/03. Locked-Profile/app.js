function lockedProfile() {
  const buttonElements = Array.from(
    document.querySelectorAll(".profile button")
  );

  for (const btn of buttonElements) {
    btn.addEventListener("click", show);
  }

  function show(el) {
    let divChildren = Array.from(el.target.parentElement.children);
    let locked = divChildren[2].checked;
    if (!locked) {

      let hiddenFieldsElement = el.target.previousElementSibling;
      
      if (el.target.textContent === "Show more") {
        hiddenFieldsElement.style.display = "inline";
        el.target.textContent = "Hide it";
      } else {
        hiddenFieldsElement.style.display = "";
        el.target.textContent = "Show more";
      }
      
    }
  }
}
