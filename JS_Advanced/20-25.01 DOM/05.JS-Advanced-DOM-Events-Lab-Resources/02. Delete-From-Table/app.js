function deleteByEmail() {
  const inputEl = document.querySelector("input[name=email]");
  const result = document.getElementById("result");
  const tableEl = document.querySelectorAll("#customers tbody tr");

  const tableRow = Array.from(tableEl).find((tr) => {
    const emailRowValue = tr.getElementsByTagName('td')[1].textContent;
    return emailRowValue === inputEl.value;
  });

  if (tableRow) {
    tableRow.remove();
    result.textContent = "Deleted";
  } else {
    result.textContent = "Not found.";
  }

  inputEl.value = "";
}
