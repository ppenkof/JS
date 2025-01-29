
function orders(product, quantity) {
    let calculation = (a, b) => a * b;
    let order = 0;
    if (product === 'coffee') {
        order = calculation(1.5, quantity);
    } else if (product === 'water') {
        order = calculation(1, quantity);
    } else if (product === 'coke') {
        order = calculation(1.4, quantity);
    } else if (product === 'snacks') {
        order = calculation(2, quantity);
    }
    console.log(order.toFixed(2));
}
orders("coffee", 2)