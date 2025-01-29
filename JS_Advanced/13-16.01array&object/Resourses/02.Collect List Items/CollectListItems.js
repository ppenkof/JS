function extractText() {
  const liElements = document.querySelectorAll("#items > li");
  //console.log(liElements);
  const items = Array.from(liElements).map((li) => {
    return li.textContent;
  });
  //console.log(items);

  const resultTextArea = document.getElementById("result");
  //console.log(resultTextArea);
  resultTextArea.value=items.join('\n');
}
