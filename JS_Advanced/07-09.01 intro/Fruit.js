function fruit(fruits, weight, price) {
    weight /= 1000;
    let total = Number(weight) * Number(price);
    console.log(`I need $${total.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruits}.`);
}
fruit('apple', 1563, 2.35)