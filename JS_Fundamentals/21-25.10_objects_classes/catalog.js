function catalog(arrStr) {
    let products = [];
    for (const productInfo of arrStr) {
        let [productName, productPrice] = productInfo.split(' : ');
        productPrice = Number(productPrice);
        let productObj = {
            name: productName,
            price: productPrice
        }
        products.push(productObj);
    }
    products.sort((a, b) => a.name.localeCompare(b.name));
    let upperCase = [];
    for (const productObj of products) {

        let upper = productObj.name[0];
        if (!upperCase.includes(upper)) {
            console.log(upper);
            upperCase.push(upper);
        }

        console.log(`  ${productObj.name}: ${productObj.price}`);
    }
}
catalog(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499',
    'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25',
    'Anti-Bug Spray : 15', 'T-Shirt : 10'])