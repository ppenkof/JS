function storeProvision(store, order) {
    let productQuantity = {};
    for (let i = 0; i < store.length; i += 2) {
        let productName = store[i];
        let quantity = store[i + 1];
        quantity = Number(quantity);
        productQuantity[productName] = quantity;
    }
   // console.log(productQuantity);
    for (let i = 0; i < order.length; i += 2) {
        let productName = order[i];
        let quantity = order[i + 1];
        quantity = Number(quantity);
        if (!productQuantity.hasOwnProperty(productName)) {
            productQuantity[productName] = quantity;
        } else {
            productQuantity[productName] += quantity;
        }
    }
  //  console.log(productQuantity);
    let key = Object.keys(productQuantity);
    for (let key in productQuantity) {
        let value = productQuantity[key];
        console.log(`${key} -> ${value}`);
    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])