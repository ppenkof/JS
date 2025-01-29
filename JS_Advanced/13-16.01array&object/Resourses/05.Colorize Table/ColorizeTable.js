function colorize() {
   const tableRowEven = document.querySelectorAll("table tr:nth-child(even)");
for (const row of tableRowEven) {
    row.style.background = 'teal';
}
}