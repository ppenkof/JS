let div = document.createElement("div");
function createElements(typeEl, parentEl, classEl, textEl) {
    let el;
  typeEl!==''? el= document.createElement(typeEl):'';
  parentEl!==''?.appendChild(el);
  classEl!==''?el.classList.add(classEl):'';
  textEl!==''?el.textContent = textEl:'';
  return el;
}
console.log(createElements('div',div,'test','Hello World!'));