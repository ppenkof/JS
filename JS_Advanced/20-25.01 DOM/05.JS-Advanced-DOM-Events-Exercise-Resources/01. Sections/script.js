function create(words) {
  const content = document.getElementById("content");
  for (const word of words) {
    let div = document.createElement("div");
    let paragraph = document.createElement("p");

    paragraph.textContent = word;
    paragraph.style.display = "none";

    div.appendChild(paragraph);
    div.addEventListener("click", reveal);
    content.appendChild(div);
  }

  function reveal(el) {
   //debugger;
    //console.log(el.target);
    //console.log(el.currentTarget);
    el.currentTarget.children[0].style.display = "block";
  }
}
