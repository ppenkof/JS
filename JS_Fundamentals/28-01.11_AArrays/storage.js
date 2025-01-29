function storage(arr) {
    let Storage = new Map();
    for (const item of arr) {
        let [product, quantity] = item.split(' ');
        quantity = Number(quantity);
        if (Storage.has(product)) {
            let newValue = Number(Storage.get(product));
            quantity += newValue;
        }
        Storage.set(product, quantity);
    }

    for (let [product, quantity] of Storage) {
        console.log(`${product} -> ${quantity}`);
    }
}
storage(['tomatoes 10',

    'coffee 5',

    'olives 100',

    'coffee 40'])