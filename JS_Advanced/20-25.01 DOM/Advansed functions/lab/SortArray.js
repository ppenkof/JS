function sortArray(numbers, order) {
  const sa = numbers.sort((a, b) => {
    return order === "asc" ? a - b : b - a;
  });
  console.log(sa);
}
sortArray([14, 7, 17, 6, 8], "dec");
