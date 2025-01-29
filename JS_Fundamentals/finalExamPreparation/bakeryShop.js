function bakeryShop(arr) {
    let cmd = arr.shift();
    let products = {};
    let totalSell = 0;
    while (cmd !== 'Complete') {

        let cmdItems = cmd.split(' ');
        let action = cmdItems.shift();
        let [quantity, food] = cmdItems;
        quantity = Number(quantity);
        if (action === 'Receive') {

            if (!(food in products)) {
                if (quantity > 0) {
                    products[food] = quantity;
                }
            } else {
                products[food] += quantity;
            }

        } else if (action === 'Sell') {

            if (!(food in products)) {
                console.log(`You do not have any ${food}.`);
            } else {


                if (products[food] >= quantity) {
                    totalSell += quantity;
                    console.log(`You sold ${quantity} ${food}.`);

                } else {
                    console.log(`There aren't enough ${food}. You sold the last ${products[food]} of them.`);
                    totalSell += products[food];
                }

                products[food] -= quantity;


                if (products[food] <= 0) {
                    delete products[food];
                }
            }

        }

        cmd = arr.shift();
    }

    for (const key in products) {
        console.log(`${key}: ${products[key]}`);
    }

    console.log(`All sold: ${totalSell} goods`);
}
bakeryShop(['Receive 105 cookies',
    'Receive 10 donuts',
    'Sell 10 donuts',
    'Sell 1 bread',
    'Complete',
])
bakeryShop(['Receive 10 muffins',
    'Receive 23 bagels',
    'Sell 5 muffins',
    'Sell 10 bagels',
    'Complete'
    ])