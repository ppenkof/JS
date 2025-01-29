function sumTable() {
  const sum = document.getElementById("sum");
  const costEl = document.querySelectorAll(
    "table tr td:nth-of-type(2):not(#sum)"
  );
  let totalSum = 0;
  for (const el of costEl) {
    totalSum += Number(el.textContent);
  }
  sum.textContent = totalSum;
}
