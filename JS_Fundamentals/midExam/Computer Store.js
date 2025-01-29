function computerStore(arr) {
    let totalPrice = 0;
    let taxes = 0.2;
    let discount = 1;
    let price = 0;
    for (let element of arr) {

        if (element === 'special') {
            discount = 0.9;
        } else if (element === 'regular') {
            discount = 1;
        } else {
            price = Number(element);
            if (price < 0) {
                console.log("Invalid price!");
            } else {
                totalPrice += price;
            }
        }

    }
    if (totalPrice === 0) {
        console.log("Invalid order!");
    } else {
        taxes=totalPrice * taxes;
        finalPrice=(totalPrice + taxes)* discount;
        console.log(`Congratulations you've just bought a new computer!
        Price without taxes: ${totalPrice.toFixed(2)}$
        Taxes: ${taxes.toFixed(2)}$
        -----------
        Total price: ${finalPrice.toFixed(2)}$`)
    }
}
computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
])
computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
])
computerStore([
    'regular'
    ])

